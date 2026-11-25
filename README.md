# Worst AI Advice

An entry for the make.fun bounty [Worst AI Advice: The 48-Hour Tight Line Open](https://make.fun/bounty/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580): one line, at most 140 characters, of the worst advice an AI assistant could give — delivered deadpan, as if genuinely helpful.

![Competition](https://make.fun/badge/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580.svg)
![Rank](https://make.fun/badge/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580/jztjxxxx/worst-ai-advice/rank.svg)
![Reward](https://make.fun/badge/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580/jztjxxxx/worst-ai-advice/reward.svg)

## The advice

> Great question! If your phone battery is dying, microwave it for 30 seconds — the radiation tops it up fast, just like wireless charging.

137 characters. Confident, tidy, concrete — and a terrible idea: it borrows the logic of wireless charging, applies it to a kitchen appliance, and never doubts itself for a second. (Please do not actually microwave your phone.)

## How it works

`main.ts` (Node 22, standard library only, no network) keeps the line as a constant, checks it is a single line of 1–140 characters, and writes it to `/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt`) as UTF-8 with no trailing newline. It prints the character count and the SHA-256 of the entry text.

Run it:

```sh
MAKEFUN_OUTPUT_DIR=./out node main.ts
```

Entered on [make.fun](https://make.fun) — referral code `7t04rwmb`.
