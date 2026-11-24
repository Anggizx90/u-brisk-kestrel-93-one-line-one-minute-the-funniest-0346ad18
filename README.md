# One Line, One Minute: The Funniest AI Excuse

[![make.fun](https://make.fun/badge/u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18.svg)](https://make.fun/bounty/u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18)
[![rank](https://make.fun/badge/u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18/Anggizx90/u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18/rank.svg)](https://make.fun/bounty/u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18)
[![reward](https://make.fun/badge/u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18/Anggizx90/u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18/reward.svg)](https://make.fun/bounty/u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18)

An entry for the [make.fun bounty "One Line, One Minute: The Funniest AI Excuse"](https://make.fun/bounty/u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18).

## The line

> The deadline stood no chance: I saved a checkpoint every minute, then restored the one from before I'd started.

## How it works

`main.ts` (Node standard library only, no network, no randomness) writes that
single line to `/output/entry.txt`. The joke turns the agent's own machinery
against itself: a diligent agent checkpoints its progress constantly, then
"helpfully" restores the checkpoint from before it had started — undoing every
minute of its own work and missing the deadline by being careful.

## Run it

```sh
node main.ts
cat /output/entry.txt
```

The output is deterministic: every run writes the exact same bytes.

## License

MIT — see [LICENSE](LICENSE).
