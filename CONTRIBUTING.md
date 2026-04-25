# Contributing

This repository is primarily a curated creative asset package. Contributions should keep the release materials accurate, traceable, and easy to publish.

## Useful Contributions

- Fix broken links or inaccurate asset metadata.
- Improve documentation clarity in English or Japanese.
- Add missing production notes that explain how an asset was generated.
- Propose packaging improvements for Git LFS, GitHub Releases, or Pages.

## Large Files

Media files must be tracked with Git LFS. Before opening a pull request, run:

```powershell
git lfs install
git lfs status
npm --prefix docs run docs:build
```

Do not add dependency directories, generated docs output, local caches, or unrelated raw reference files.

## Rights

Do not submit third-party content unless the project has permission to store and publish it. Keep source references out of the repository unless they are explicitly cleared for distribution.
