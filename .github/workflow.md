name: Git Workflow Guide //Nousad Team - Lead

steps:
  - Step 1: Checkout to the develop branch  
    ```sh
    git checkout develop
    ```

  - Step 2: Pull the latest changes from develop  
    ```sh
    git pull origin develop
    ```

  - Step 3: Create a new feature branch  
    ```sh
    git checkout -b feature/your branch name
    ```

  - Step 4: Work on your changes (modify files)

  - Step 5: Add all changes  
    ```sh
    git add .
    ```

  - Step 6: Commit changes  
    ```sh
    git commit -m "Describe your changes"
    ```

  - Step 7: Push the branch to GitHub  
    ```sh
    git push origin feature-branch
    ```

  - Step 8: Create a Pull Request (PR) to `develop` on GitHub  


Do all perfetly // Nosuad

to rest the branch run these commands
git checkout -- .
git reset --hard