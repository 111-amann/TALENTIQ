import { requireAuth, clerkClient } from "@clerk/express";
import User from "../models/User.js";
import { upsertStreamUser } from "../libs/stream.js";

export const protectRoute = [
  requireAuth(),
  async (req, res, next) => {
    try {
      const clerkId = req.auth().userId;
      if (!clerkId)
        return res.status(401).json({ msg: "Unauthorized - invalid token" });

      let user = await User.findOne({ clerkId });

      // ✅ User not in DB yet — sync from Clerk on first request
      if (!user) {
        const clerkUser = await clerkClient.users.getUser(clerkId);

        user = await User.create({
          clerkId,
          name: `${clerkUser.firstName || ""} ${clerkUser.lastName || ""}`.trim() || "Anonymous",
          email: clerkUser.emailAddresses[0]?.emailAddress || "",
          profileImage: clerkUser.imageUrl || "",
        });

        // sync to Stream as well
        await upsertStreamUser({
          id: clerkId,
          name: user.name,
          image: user.profileImage,
        });
      }

      req.user = user;
      next();
    } catch (error) {
      console.error("Error in protectRoute middleware", error);
      res.status(500).json({ msg: "Internal Server Error" });
    }
  },
];

// import { requireAuth } from "@clerk/express";
// import User from "../models/User.js";

// export const protectRoute = [
//   requireAuth(),
//   async (req, res, next) => {
//     try {
//       const clerkId = req.auth().userId;
//       if (!clerkId)
//         return res.status(401).json({ msg: "Unauthorized - invalid token" });

//       //find user in db by using clerk id
//       const user = await User.findOne({ clerkId });
//       if (!user) return res.status(404).json({ msg: "User not found" });

//       //attach user to req
//       req.user = user;

//       next();
//     } catch (error) {
//       console.error("Error in protectRout middleware", error);
//       res.status(500).json({ msg: "Internal Server Error" });
//     }
//   },
// ];
