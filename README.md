
---

# MERN Stack Monorepo Boilerplate

This is a monorepo boilerplate for a MERN (MongoDB, Express, React, Node.js) stack project. Follow the steps below to set it up locally.

## Getting Started

### Clone the Repository or Download via ZIP

#### Option 1: Clone via Git

```bash
git clone <repository-url>
```

#### Option 2: Download as ZIP

- Click the "Code" button on the repository page.
- Select "Download ZIP".
- Extract the ZIP file to your desired location.

### Navigate to the Project Directory

Once you've copied the project locally, open the project directory:

```bash
cd <project-directory>
```

You should see the following structure:

```
/project-directory
├── client/
├── server/
├── .gitignore
├── package.json
├── README.md
└── yarn.lock
```

## Setup

### Step 1 (Optional): Install `concurrently` for Simultaneous Command Execution

If you wish to run the client and server simultaneously, install the project dependencies including `concurrently`:

```bash
yarn install
```

### Step 2: Install Dependencies

Install the dependencies for the client and server.

#### Option 1: Install Separately

```bash
yarn workspace client install
yarn workspace server install
```

#### Option 2: Install Using `concurrently`

```bash
yarn client-server
```

> **Note:** The `yarn client-server` command requires `concurrently` to be installed as set up in Step 1.

## Start Project

### Step 3: Start the Client and Server

Start the client and server.

#### Option 1: Start Separately

```bash
yarn workspace client dev
yarn workspace server dev
```

#### Option 2: Start Using `concurrently`

```bash
yarn dev
```

## Customization

### Edit Project Information

Customize your project by editing the `package.json` file in the root directory. Update the fields such as:

- `name`
- `keywords`
- `author`
- `homepage`
- `bugs`
- `repository`

### Edit Scripts

Edit the scripts in the `package.json` files located in the root, `server`, and `client` directories as needed. Generally, you will mostly need to:

- Edit the server script.
- Add/remove scripts in the root `package.json` and `server/package.json`.

## Need Help?

If you encounter any issues, please report them at [GitHub Issues](https://github.com/philipthedeveloper/mern-monorepo-boilerplate/issues) or email <philipowolabi79@gmail.com>.

---

Happy Hacking! 🧑‍💻🎉

---
