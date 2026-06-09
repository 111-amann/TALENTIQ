import { ENV } from "../libs/env.js";

export async function executeCode(req, res) {
  try {
    const { language, code } = req.body;

    const LANGUAGE_CONFIG = {
      javascript: { language: "javascript", fileName: "main.js" },
      python: { language: "python", fileName: "main.py" },
      java: { language: "java", fileName: "Main.java" },
    };

    const config = LANGUAGE_CONFIG[language];

    if (!config) {
      return res.status(400).json({ success: false, error: `Unsupported language: ${language}` });
    }

    const response = await fetch(`https://glot.io/api/run/${config.language}/latest`, {
      method: "POST",
      headers: {
        "Authorization": `Token ${ENV.GLOT_API_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        files: [{ name: config.fileName, content: code }],
      }),
    });

    if (!response.ok) {
      return res.status(500).json({ success: false, error: `Glot API error: ${response.status}` });
    }

    const data = await response.json();

    const output = data.stdout || "";
    const stderr = data.stderr || "";

    if (stderr) {
      return res.status(200).json({ success: false, output, error: stderr });
    }

    return res.status(200).json({ success: true, output: output || "No output" });

  } catch (error) {
    console.error("Error in executeCode controller:", error.message);
    res.status(500).json({ success: false, error: `Failed to execute code: ${error.message}` });
  }
}