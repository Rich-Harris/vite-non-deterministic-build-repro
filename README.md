# vite-non-deterministic-build-repro

```
git clone git@github.com:Rich-Harris/vite-non-deterministic-build-repro.git
cd vite-non-deterministic-build-repro
pnpm i
pnpm test
pnpm test
pnpm test
pnpm test
```

## Expected

The output should be the same each time.

## Actual

It isn't. (You may need to run `pnpm test` several times before getting inconsistent output.)
