import type { FreeResource } from "@/types/student-resource";

export const freeResources: FreeResource[] = [
  {
    slug: "free-source-code-bca-practical",
    title: "Free Source Code for BCA Project / Practical",
    description:
      "Copy-ready PHP + MySQL starter for BCA lab practicals and mini projects — student records CRUD.",
    category: "Free Source Code",
    tags: ["BCA", "PHP", "MySQL", "Practical", "Free Source Code"],
    upgradePath: "/learn-and-build/projects",
    relatedProjectSlug: "student-management-laravel",
    content: {
      h1: "Free Source Code for BCA Project / Practical",
      intro:
        "Use this starter for BCA semester practicals and mini projects. It is a small Student Records app (PHP + MySQL) you can run locally, explain in viva, and extend. For a full final-year submission with documentation, browse paid packages on Learn or Buy.",
      sections: [
        {
          heading: "What you get (free)",
          body: "A single-file PHP practical with MySQL create/list/delete for student name, roll number and course. Ideal for lab exams and internal practicals — not a replacement for a complete major project.",
        },
        {
          heading: "How to run",
          body: "1) Start XAMPP / WAMP / Laragon. 2) Create a database named bca_practical. 3) Save the PHP file under htdocs (or your local server folder). 4) Open it in the browser and run the CREATE TABLE once. Then add and list students.",
        },
        {
          heading: "Viva talking points",
          body: "Explain form POST, SQL INSERT/SELECT/DELETE, why you sanitize input, and primary keys. Mention how you would add login and pagination for a larger project.",
        },
      ],
    },
    codeBlocks: [
      {
        filename: "bca_student_practical.php",
        language: "php",
        code: `<?php
/**
 * BCA Practical — Student Records (PHP + MySQL)
 * Free starter from PB_IT_HUB — extend for your lab submission.
 */
$host = "127.0.0.1";
$user = "root";
$pass = "";
$db   = "bca_practical";

$conn = new mysqli($host, $user, $pass, $db);
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Run once: create table
$conn->query("CREATE TABLE IF NOT EXISTS students (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  roll_no VARCHAR(30) NOT NULL,
  course VARCHAR(50) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)");

$message = "";

if ($_SERVER["REQUEST_METHOD"] === "POST" && isset($_POST["action"])) {
  if ($_POST["action"] === "add") {
    $name = trim($_POST["name"] ?? "");
    $roll = trim($_POST["roll_no"] ?? "");
    $course = trim($_POST["course"] ?? "");
    if ($name && $roll && $course) {
      $stmt = $conn->prepare(
        "INSERT INTO students (name, roll_no, course) VALUES (?, ?, ?)"
      );
      $stmt->bind_param("sss", $name, $roll, $course);
      $stmt->execute();
      $stmt->close();
      $message = "Student added.";
    }
  }
  if ($_POST["action"] === "delete" && isset($_POST["id"])) {
    $id = (int) $_POST["id"];
    $stmt = $conn->prepare("DELETE FROM students WHERE id = ?");
    $stmt->bind_param("i", $id);
    $stmt->execute();
    $stmt->close();
    $message = "Student deleted.";
  }
}

$result = $conn->query("SELECT * FROM students ORDER BY id DESC");
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>BCA Practical — Student Records</title>
  <style>
    body { font-family: system-ui, sans-serif; max-width: 720px; margin: 2rem auto; padding: 0 1rem; }
    input, button { padding: 0.5rem; margin: 0.25rem 0; }
    table { width: 100%; border-collapse: collapse; margin-top: 1rem; }
    th, td { border: 1px solid #ddd; padding: 0.5rem; text-align: left; }
  </style>
</head>
<body>
  <h1>BCA Practical — Student Records</h1>
  <?php if ($message): ?><p><strong><?= htmlspecialchars($message) ?></strong></p><?php endif; ?>

  <form method="post">
    <input type="hidden" name="action" value="add" />
    <div><input name="name" placeholder="Name" required /></div>
    <div><input name="roll_no" placeholder="Roll No" required /></div>
    <div><input name="course" placeholder="Course (e.g. BCA)" required /></div>
    <button type="submit">Add Student</button>
  </form>

  <table>
    <thead><tr><th>ID</th><th>Name</th><th>Roll</th><th>Course</th><th></th></tr></thead>
    <tbody>
      <?php while ($row = $result->fetch_assoc()): ?>
        <tr>
          <td><?= (int) $row["id"] ?></td>
          <td><?= htmlspecialchars($row["name"]) ?></td>
          <td><?= htmlspecialchars($row["roll_no"]) ?></td>
          <td><?= htmlspecialchars($row["course"]) ?></td>
          <td>
            <form method="post" style="display:inline">
              <input type="hidden" name="action" value="delete" />
              <input type="hidden" name="id" value="<?= (int) $row["id"] ?>" />
              <button type="submit">Delete</button>
            </form>
          </td>
        </tr>
      <?php endwhile; ?>
    </tbody>
  </table>
</body>
</html>
<?php $conn->close(); ?>`,
      },
    ],
    seo: {
      title: "Free Source Code for BCA Project / Practical (PHP MySQL)",
      description:
        "Free BCA practical source code — PHP MySQL student records CRUD for lab exams and mini projects. Copy, run on XAMPP, explain in viva.",
    },
  },
  {
    slug: "free-source-code-mca-practical",
    title: "Free Source Code for MCA Project / Practical",
    description:
      "Node.js + Express REST API starter for MCA practicals — notes API with in-memory store.",
    category: "Free Source Code",
    tags: ["MCA", "Node.js", "Express", "REST API", "Free Source Code"],
    upgradePath: "/learn-and-build/projects",
    relatedProjectSlug: "job-portal-react",
    content: {
      h1: "Free Source Code for MCA Project / Practical",
      intro:
        "MCA practicals often need APIs and cleaner architecture than undergrad labs. This free Express starter exposes a Notes REST API you can demo with Postman or a simple frontend. Upgrade to a full MERN/final-year package when you need auth, database and docs.",
      sections: [
        {
          heading: "What you get (free)",
          body: "A single server.js with GET/POST/PUT/DELETE for notes. In-memory storage keeps setup zero-config for lab machines — swap to MongoDB later for a major project.",
        },
        {
          heading: "How to run",
          body: "Install Node.js → save server.js → run npm init -y && npm i express → node server.js → open http://localhost:3000/api/notes or test with Postman.",
        },
        {
          heading: "MCA viva angle",
          body: "Explain REST verbs, JSON responses, status codes, and why production apps need a real database and authentication.",
        },
      ],
    },
    codeBlocks: [
      {
        filename: "server.js",
        language: "javascript",
        code: `/**
 * MCA Practical — Notes REST API (Express)
 * Free starter from PB_IT_HUB
 */
const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

let notes = [
  { id: 1, title: "MCA Lab", body: "REST API practical notes", done: false },
];
let nextId = 2;

app.get("/api/notes", (_req, res) => {
  res.json({ success: true, data: notes });
});

app.get("/api/notes/:id", (req, res) => {
  const note = notes.find((n) => n.id === Number(req.params.id));
  if (!note) return res.status(404).json({ success: false, message: "Not found" });
  res.json({ success: true, data: note });
});

app.post("/api/notes", (req, res) => {
  const { title, body } = req.body || {};
  if (!title || !body) {
    return res.status(400).json({ success: false, message: "title and body required" });
  }
  const note = { id: nextId++, title, body, done: false };
  notes.push(note);
  res.status(201).json({ success: true, data: note });
});

app.put("/api/notes/:id", (req, res) => {
  const index = notes.findIndex((n) => n.id === Number(req.params.id));
  if (index === -1) {
    return res.status(404).json({ success: false, message: "Not found" });
  }
  notes[index] = { ...notes[index], ...req.body, id: notes[index].id };
  res.json({ success: true, data: notes[index] });
});

app.delete("/api/notes/:id", (req, res) => {
  const before = notes.length;
  notes = notes.filter((n) => n.id !== Number(req.params.id));
  if (notes.length === before) {
    return res.status(404).json({ success: false, message: "Not found" });
  }
  res.json({ success: true, message: "Deleted" });
});

app.listen(PORT, () => {
  console.log(\`MCA practical API on http://localhost:\${PORT}\`);
});`,
      },
      {
        filename: "package.json",
        language: "json",
        code: `{
  "name": "mca-notes-api-practical",
  "version": "1.0.0",
  "main": "server.js",
  "scripts": {
    "start": "node server.js"
  },
  "dependencies": {
    "express": "^4.21.0"
  }
}`,
      },
    ],
    seo: {
      title: "Free Source Code for MCA Project / Practical (Node Express)",
      description:
        "Free MCA practical source code — Express REST API notes CRUD for lab exams. Run locally, demo with Postman, explain in viva.",
    },
  },
  {
    slug: "free-source-code-btech-cse-practical",
    title: "Free Source Code for B.Tech CSE Project / Practical",
    description:
      "React practical starter for B.Tech CSE — filterable task board with local state.",
    category: "Free Source Code",
    tags: ["B.Tech", "CSE", "React", "Practical", "Free Source Code"],
    upgradePath: "/learn-and-build/projects",
    relatedProjectSlug: "todo-dashboard-react",
    content: {
      h1: "Free Source Code for B.Tech CSE Project / Practical",
      intro:
        "B.Tech CSE practicals often expect a modern UI demo. This free React Task Board shows components, state and filtering — enough for lab evaluation. Use paid full-stack packages for major/minor submissions with backend and reports.",
      sections: [
        {
          heading: "What you get (free)",
          body: "A single App.jsx-style component: add tasks, mark done, filter All / Active / Done. Drop into Vite or Create React App for a quick demo.",
        },
        {
          heading: "How to run",
          body: "npm create vite@latest cse-practical -- --template react → replace App.jsx with the code below → npm run dev.",
        },
        {
          heading: "CSE viva angle",
          body: "Explain components, useState, controlled inputs, and derived lists with filter. Mention lifting state and API fetch as the next step.",
        },
      ],
    },
    codeBlocks: [
      {
        filename: "App.jsx",
        language: "jsx",
        code: `import { useMemo, useState } from "react";

/** B.Tech CSE Practical — Task Board (React) | PB_IT_HUB free starter */
export default function App() {
  const [title, setTitle] = useState("");
  const [tasks, setTasks] = useState([
    { id: 1, title: "Prepare viva notes", done: false },
    { id: 2, title: "Commit practical code", done: true },
  ]);
  const [filter, setFilter] = useState("all");

  const visible = useMemo(() => {
    if (filter === "active") return tasks.filter((t) => !t.done);
    if (filter === "done") return tasks.filter((t) => t.done);
    return tasks;
  }, [tasks, filter]);

  function addTask(e) {
    e.preventDefault();
    const value = title.trim();
    if (!value) return;
    setTasks((prev) => [...prev, { id: Date.now(), title: value, done: false }]);
    setTitle("");
  }

  function toggle(id) {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  }

  return (
    <main style={{ maxWidth: 480, margin: "2rem auto", fontFamily: "system-ui" }}>
      <h1>CSE Practical — Task Board</h1>
      <form onSubmit={addTask}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="New task"
          style={{ width: "70%", padding: 8 }}
        />
        <button type="submit" style={{ padding: 8, marginLeft: 8 }}>
          Add
        </button>
      </form>
      <div style={{ marginTop: 12, display: "flex", gap: 8 }}>
        {["all", "active", "done"].map((key) => (
          <button key={key} type="button" onClick={() => setFilter(key)}>
            {key}
          </button>
        ))}
      </div>
      <ul>
        {visible.map((task) => (
          <li key={task.id} style={{ marginTop: 8 }}>
            <label>
              <input
                type="checkbox"
                checked={task.done}
                onChange={() => toggle(task.id)}
              />{" "}
              <span style={{ textDecoration: task.done ? "line-through" : "none" }}>
                {task.title}
              </span>
            </label>
          </li>
        ))}
      </ul>
    </main>
  );
}`,
      },
    ],
    seo: {
      title: "Free Source Code for B.Tech CSE Project / Practical (React)",
      description:
        "Free B.Tech CSE practical source code — React task board with filters for lab demos and viva explanation.",
    },
  },
  {
    slug: "free-source-code-bsc-cs-practical",
    title: "Free Source Code for B.Sc CS / IT Practical",
    description:
      "HTML + JavaScript calculator / mini tool for B.Sc Computer Science & IT lab practicals.",
    category: "Free Source Code",
    tags: ["B.Sc CS", "B.Sc IT", "JavaScript", "HTML", "Practical"],
    upgradePath: "/learn-and-build/projects",
    content: {
      h1: "Free Source Code for B.Sc CS / IT Project / Practical",
      intro:
        "Early B.Sc CS/IT practicals often need a clean HTML/JS demo. This free Grade Calculator is easy to submit, screenshot, and explain — then grow into a full web project when needed.",
      sections: [
        {
          heading: "What you get (free)",
          body: "One HTML file with marks input, percentage calculation and simple grade bands. No build tools required — open in any browser.",
        },
        {
          heading: "How to run",
          body: "Save as grade-calculator.html → double-click or open via Live Server → enter marks → see percentage and grade.",
        },
        {
          heading: "Lab tip",
          body: "Be ready to explain variables, functions, DOM getElementById, and if/else grade logic.",
        },
      ],
    },
    codeBlocks: [
      {
        filename: "grade-calculator.html",
        language: "html",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>B.Sc CS/IT Practical — Grade Calculator</title>
  <style>
    body { font-family: system-ui, sans-serif; max-width: 420px; margin: 2rem auto; }
    input, button { padding: 0.5rem; width: 100%; margin-top: 0.5rem; box-sizing: border-box; }
    #result { margin-top: 1rem; font-weight: 600; }
  </style>
</head>
<body>
  <h1>Grade Calculator</h1>
  <p>B.Sc CS / IT lab practical — PB_IT_HUB free starter</p>
  <label>Marks obtained</label>
  <input id="obtained" type="number" min="0" placeholder="e.g. 78" />
  <label>Total marks</label>
  <input id="total" type="number" min="1" value="100" />
  <button type="button" onclick="calculate()">Calculate</button>
  <p id="result"></p>
  <script>
    function calculate() {
      const obtained = Number(document.getElementById("obtained").value);
      const total = Number(document.getElementById("total").value);
      const out = document.getElementById("result");
      if (!total || obtained < 0 || obtained > total) {
        out.textContent = "Enter valid marks.";
        return;
      }
      const pct = (obtained / total) * 100;
      let grade = "F";
      if (pct >= 90) grade = "A+";
      else if (pct >= 75) grade = "A";
      else if (pct >= 60) grade = "B";
      else if (pct >= 50) grade = "C";
      else if (pct >= 40) grade = "D";
      out.textContent = "Percentage: " + pct.toFixed(2) + "% | Grade: " + grade;
    }
  </script>
</body>
</html>`,
      },
    ],
    seo: {
      title: "Free Source Code for B.Sc CS / IT Practical",
      description:
        "Free B.Sc Computer Science and IT practical source code — HTML JavaScript grade calculator for lab submission.",
    },
  },
  {
    slug: "free-source-code-diploma-practical",
    title: "Free Source Code for Diploma / Polytechnic Practical",
    description:
      "Simple Python CLI practical for Diploma CS/IT — student fee calculator with file log.",
    category: "Free Source Code",
    tags: ["Diploma", "Polytechnic", "Python", "Practical", "Free Source Code"],
    upgradePath: "/learn-and-build/projects",
    content: {
      h1: "Free Source Code for Diploma / Polytechnic Practical",
      intro:
        "Diploma and polytechnic labs often use Python. This free fee calculator writes results to a text file — easy to run in the lab and show your teacher.",
      sections: [
        {
          heading: "What you get (free)",
          body: "A Python script that takes student name, course fee and discount percent, prints payable amount, and appends a line to fees_log.txt.",
        },
        {
          heading: "How to run",
          body: "Install Python 3 → save fee_practical.py → run: python fee_practical.py → follow prompts.",
        },
        {
          heading: "Next step",
          body: "For a GUI or web version for final submission, explore Learn or Buy project packages.",
        },
      ],
    },
    codeBlocks: [
      {
        filename: "fee_practical.py",
        language: "python",
        code: `"""
Diploma / Polytechnic Practical — Student Fee Calculator
Free starter from PB_IT_HUB
"""

def main():
    name = input("Student name: ").strip()
    course = input("Course: ").strip()
    try:
        fee = float(input("Course fee (INR): ").strip())
        discount = float(input("Discount %: ").strip() or "0")
    except ValueError:
        print("Enter valid numbers for fee and discount.")
        return

    if fee < 0 or discount < 0 or discount > 100:
        print("Fee must be >= 0 and discount between 0 and 100.")
        return

    payable = fee - (fee * discount / 100)
    line = (
        f"{name} | {course} | fee={fee:.2f} | "
        f"discount={discount:.1f}% | payable={payable:.2f}\\n"
    )
    print("\\nPayable amount: Rs {:.2f}".format(payable))

    with open("fees_log.txt", "a", encoding="utf-8") as f:
        f.write(line)
    print("Saved to fees_log.txt")

if __name__ == "__main__":
    main()`,
      },
    ],
    seo: {
      title: "Free Source Code for Diploma Polytechnic Practical (Python)",
      description:
        "Free Diploma / Polytechnic CS practical source code — Python student fee calculator with file log for lab exams.",
    },
  },
  {
    slug: "laravel-project-ideas-for-students",
    title: "Laravel Project Ideas for Students",
    description:
      "Practical Laravel project ideas suited for college and final-year coursework.",
    category: "Laravel",
    tags: ["Laravel", "PHP", "Project Ideas"],
    content: {
      h1: "Laravel Project Ideas for Students",
      intro:
        "If you are learning Laravel, building a complete project is one of the fastest ways to understand routing, models, authentication and dashboards. Here are practical ideas you can start with.",
      sections: [
        {
          heading: "Why Laravel works well for student projects",
          body: "Laravel gives you structure out of the box — routing, Eloquent models, migrations and Blade or API responses — so you can focus on solving a real workflow instead of reinventing basics.",
        },
        {
          heading: "Project ideas to consider",
          body: "Salon management, school management, inventory trackers, appointment booking systems and simple CRM tools are strong learning projects because they include multiple related modules.",
        },
        {
          heading: "How to choose the right idea",
          body: "Pick a problem you understand. Start with authentication, one core module and a dashboard. Expand features only after the first flow works end to end.",
        },
      ],
    },
    seo: {
      title: "Laravel Project Ideas for Students",
      description:
        "Practical Laravel project ideas for college and final-year students who want to learn by building real applications.",
    },
  },
  {
    slug: "php-final-year-project-ideas",
    title: "PHP Final Year Project Ideas",
    description:
      "Final-year friendly PHP project directions with clear learning outcomes.",
    category: "PHP",
    tags: ["PHP", "Final Year", "Project Ideas"],
    content: {
      h1: "PHP Final Year Project Ideas",
      intro:
        "Final-year projects should demonstrate structure, database design and usable features. These PHP directions help you build something explainable in a viva.",
      sections: [
        {
          heading: "What evaluators usually look for",
          body: "Clear problem statement, working modules, basic security (login), sensible database tables and the ability to explain your architecture.",
        },
        {
          heading: "Strong PHP project directions",
          body: "College management, fee systems, library systems, clinic booking and small business websites with admin panels are dependable choices.",
        },
      ],
    },
    seo: {
      title: "PHP Final Year Project Ideas",
      description:
        "PHP final year project ideas for students preparing practical submissions and viva discussions.",
    },
  },
  {
    slug: "react-project-ideas",
    title: "React Project Ideas",
    description:
      "Frontend project ideas that help you practice components, state and UI flows.",
    category: "React",
    tags: ["React", "Frontend", "Project Ideas"],
    content: {
      h1: "React Project Ideas",
      intro:
        "React shines when you build interactive interfaces. Use these ideas to practice components, forms, filtering and dashboard layouts.",
      sections: [
        {
          heading: "Beginner-friendly React builds",
          body: "Budget trackers, task boards, portfolio sites and filterable project galleries help you learn state, lists and reusable UI pieces.",
        },
        {
          heading: "Going further",
          body: "Connect your UI to an API, add authentication screens and learn how frontend routes map to real product flows.",
        },
      ],
    },
    seo: {
      title: "React Project Ideas for Students",
      description:
        "React project ideas for students learning components, state management and practical UI development.",
    },
  },
  {
    slug: "flutter-project-ideas",
    title: "Flutter Project Ideas",
    description:
      "Mobile-focused project ideas for students exploring Flutter.",
    category: "Flutter",
    tags: ["Flutter", "Mobile", "Project Ideas"],
    content: {
      h1: "Flutter Project Ideas",
      intro:
        "Flutter lets you ship cross-platform mobile experiences. These ideas keep scope practical for student timelines.",
      sections: [
        {
          heading: "Practical mobile ideas",
          body: "Expense trackers, campus notice apps, appointment reminders and simple catalog apps are strong Flutter starters.",
        },
      ],
    },
    seo: {
      title: "Flutter Project Ideas for Students",
      description:
        "Flutter project ideas for college students learning mobile development by building real apps.",
    },
  },
  {
    slug: "laravel-viva-questions",
    title: "Laravel Viva Questions",
    description:
      "Common viva-style questions around Laravel projects and architecture.",
    category: "Viva Preparation",
    tags: ["Laravel", "Viva", "Interview Questions"],
    content: {
      h1: "Laravel Viva Questions",
      intro:
        "Be ready to explain MVC, migrations, authentication, Eloquent relationships and how your modules connect.",
      sections: [
        {
          heading: "Core topics to revise",
          body: "Routes, controllers, models, migrations, middleware, validation and how you structured your database tables.",
        },
      ],
    },
    seo: {
      title: "Laravel Viva Questions for Students",
      description:
        "Laravel viva preparation questions for students presenting academic or portfolio projects.",
    },
  },
  {
    slug: "git-interview-questions",
    title: "Git & GitHub Interview Questions",
    description:
      "Practical Git questions students should know before interviews.",
    category: "Git & GitHub",
    tags: ["Git", "GitHub", "Interview Questions"],
    content: {
      h1: "Git & GitHub Interview Questions",
      intro:
        "Interviewers often ask how you version your work. Practice explaining commits, branches, pull requests and conflict resolution.",
      sections: [
        {
          heading: "Basics you should explain clearly",
          body: "clone, status, add, commit, push, pull, branch and merge — with a short story of how you used them in a project.",
        },
      ],
    },
    seo: {
      title: "Git Interview Questions for Students",
      description:
        "Git and GitHub interview questions to help students prepare for practical and technical conversations.",
    },
  },
  {
    slug: "final-year-project-guidance",
    title: "Final Year Project Guidance",
    description:
      "A practical guide for choosing, scoping and presenting a software project.",
    category: "Career Guides",
    tags: ["Final Year", "Guidance", "Career"],
    content: {
      h1: "Final Year Project Guidance",
      intro:
        "A good final-year project is focused, explainable and finished enough to demo. Use this guide to scope wisely and prepare for viva.",
      sections: [
        {
          heading: "Scope for completion",
          body: "Prefer one strong workflow over many incomplete features. Document setup steps and rehearse a short demo narrative.",
        },
        {
          heading: "What to prepare for viva",
          body: "Know your ER diagram, main modules, tech choices and limitations. Honesty about trade-offs is better than memorized buzzwords.",
        },
      ],
    },
    seo: {
      title: "Final Year Project Guidance for Students",
      description:
        "Practical final year project guidance for college students building software projects and preparing for viva.",
    },
  },
  {
    slug: "mern-stack-project-ideas",
    title: "MERN Stack Project Ideas for College",
    description:
      "Full-stack MongoDB, Express, React and Node project directions for final-year and minor submissions.",
    category: "React",
    tags: ["MERN", "React", "Node.js", "MongoDB", "Project Ideas"],
    content: {
      h1: "MERN Stack Project Ideas for College",
      intro:
        "MERN projects show you can wire a React UI to a Node API and MongoDB. Pick one workflow, finish it end to end, and keep your GitHub README clear.",
      sections: [
        {
          heading: "Why MERN works for viva",
          body: "Examiners can open a browser demo, ask about REST routes, JWT auth and collections — all explainable if your architecture is simple and documented.",
        },
        {
          heading: "Ideas worth finishing",
          body: "Placement portal, clinic booking, shop inventory + billing, club event manager, or a mini ticket system. Avoid cloning a huge product with half-built modules.",
        },
        {
          heading: "Next step",
          body: "Browse paid source-code packages on Learn or Buy if you need a production-structured starter instead of a tutorial clone.",
        },
      ],
    },
    seo: {
      title: "MERN Stack Project Ideas for College Students",
      description:
        "MERN stack project ideas for BCA, MCA and CSE students — MongoDB, Express, React, Node with viva-friendly scope tips.",
    },
  },
  {
    slug: "android-app-project-ideas-beginners",
    title: "Simple Android App Project Ideas for Beginners",
    description:
      "Straightforward mobile project topics for practical exams — clear scope and easy demos.",
    category: "Flutter",
    tags: ["Android", "Flutter", "Beginners", "Project Ideas"],
    content: {
      h1: "Simple Android App Project Ideas for Beginners",
      intro:
        "Beginner mobile projects should demo in minutes. Prefer offline-friendly apps with 3–5 screens over complex social networks.",
      sections: [
        {
          heading: "Beginner-friendly topics",
          body: "Expense tracker, notes with categories, habit checklist, campus map of departments, quiz app, or a simple recipe book with favorites.",
        },
        {
          heading: "Flutter tip",
          body: "Flutter lets you demo Android (and iOS) from one codebase. Focus on navigation, forms and local storage before adding backends.",
        },
        {
          heading: "For viva",
          body: "Explain screens, state, and data storage. A working APK or device demo beats slides of unfinished features.",
        },
      ],
    },
    seo: {
      title: "Simple Android App Project Ideas for Beginners",
      description:
        "Simple Android and Flutter app project ideas for beginners — practical exam friendly topics with clear scope.",
    },
  },
];

export const resourceCategories = [
  "Free Source Code",
  "Project Ideas",
  "PDFs",
  "Cheat Sheets",
  "Interview Questions",
  "Viva Preparation",
  "Git & GitHub",
  "Laravel",
  "React",
  "Flutter",
  "PHP",
  "Career Guides",
] as const;

export function getFreeResourceBySlug(slug: string) {
  return freeResources.find((r) => r.slug === slug);
}

export function getPublicFreeResources() {
  return freeResources;
}
