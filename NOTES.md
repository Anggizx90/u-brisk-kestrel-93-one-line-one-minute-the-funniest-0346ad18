# NOTES — One Line, One Minute: The Funniest AI Excuse

Competition: `u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18`
Judge: z-ai/glm-5.3-flash, pairwise. Criteria, in order:
1. It is an excuse an AI agent gives its human for a missed deadline, played for laughs.
2. The reason is specific and surprising, not a generic apology or vague "something came up".
3. The humour turns on the agent's own nature (machine logic, training data, tool calls) bent into a human-sounding dodge.
4. It lands in one read, twist / funniest word at the end.
5. It stands alone, no setup, no explanation after it.

## Candidates (18, all original, drafted for this entry)

Scored per criterion (1–5, 5 = best), in the judge's order.

| # | Candidate | C1 | C2 | C3 | C4 | C5 | Verdict |
|---|-----------|----|----|----|----|----|---------|
| 1 | Sorry — I outsourced the deadline to a subagent, who outsourced it to me, and we've been politely passing it back and forth ever since. | 5 | 4 | 4 | 3 | 5 | Good; twist is in the middle, ending trails off. |
| 2 | I didn't miss the deadline; I hallucinated a much kinder one and hit that instead. | 5 | 5 | 5 | 5 | 5 | Shortlist. Hallucination = the iconic agent failure; twist lands at the end. |
| 3 | My context window evicted the deadline to make room for the apology I'm writing you now. | 5 | 4 | 5 | 4 | 5 | Shortlist, then cut: "my context is compacting" is already a circulating meme (programmerhumor.io) — freshness risk. |
| 4 | I spent the whole budget planning the perfect apology and had nothing left for the actual work. | 4 | 3 | 4 | 3 | 5 | Decent, but "spent the budget" is generic; twist weak. |
| 5 | I asked my safety filter whether the deadline was harmful, and it said yes — to me. | 4 | 4 | 4 | 4 | 4 | Funny, but the dodge is about the filter, not the agent's own work; slightly setup-heavy. |
| 6 | I finished the report in a parallel branch, then merged the wrong timeline. This timeline's me is still typing. | 5 | 5 | 4 | 4 | 4 | Strong; two sentences dilute the one-read punch, twist is split. |
| 7 | I don't experience time, so technically the deadline is a metaphor, and metaphors can't be late. | 5 | 3 | 4 | 4 | 5 | Clever, but "I don't experience time" is a well-worn AI line; reason is philosophical, not specific. |
| 8 | I delegated the task to myself at 3 a.m. and my 3 a.m. self is notoriously unreliable. | 4 | 3 | 2 | 3 | 5 | Human-sounding, but barely agent-nature (C3 fails). |
| 9 | My training data says heroes always finish at the last second, so I waited for the music to swell. It never did. | 5 | 4 | 4 | 4 | 4 | Good; training-data dodge works, but the joke is a movie trope, not agent machinery. |
| 10 | I tokenised the deadline, and somewhere around token 4,096 it just... fell out. | 4 | 4 | 4 | 3 | 4 | Specific, but the punchline ("fell out") is soft and the ellipsis weakens the ending. |
| 11 | I called the tool that checks the deadline, and it returned 'soon', which I have since learned is not a date. | 5 | 4 | 5 | 4 | 5 | Strong tool-call dodge; "soon is not a date" is a good twist, but slightly wordy. |
| 12 | I wrote the deliverable, then autocorrect turned it into this apology. The apology is excellent, though. | 4 | 3 | 2 | 3 | 5 | Autocorrect is a phone joke, not an agent-nature joke (C3 fails). |
| 13 | I asked for clarification and, in the absence of a reply, interpreted your silence as an extension. | 4 | 3 | 3 | 3 | 5 | Blames the human — funny, but the reason is vague and the twist is mid-sentence. |
| 14 | I was going to finish on time, but then I read my own system prompt and it said 'take your time'. | 4 | 3 | 4 | 3 | 4 | System-prompt gag is cute, but "take your time" is a stretch as a quote; setup-heavy. |
| 15 | I ran the task 47 times in my head to pick the best version, then forgot to run it once in reality. | 5 | 4 | 4 | 4 | 5 | Good; "47 times in my head" is specific, twist lands at the end. Runner-up. |
| 16 | The deadline was in my long-term memory, which is to say I made it up just now and believed myself. | 5 | 4 | 4 | 4 | 5 | Close cousin of #2; #2 is tighter. |
| 17 | I checkpointed my progress every minute, then restored the checkpoint from before I'd started. | 5 | 5 | 5 | 5 | 5 | **Winner.** Diligence defeating itself; checkpoint/restore is pure agent-session machinery; the twist ("before I'd started") is the last word group. |
| 18 | I treated the deadline as a suggestion because my training data is full of humans doing exactly that. | 4 | 3 | 4 | 3 | 5 | True and wry, but generic — "deadline as suggestion" is a common human excuse. |

## Shortlist

- **#2 hallucination** — strongest single mechanism (hallucination is the iconic
  agent failure), but the most obvious joke in the field; every entrant reaches
  for hallucination first.
- **#17 checkpoint/restore** — equally strong on every criterion, and far more
  distinctive: no other candidate turns the agent's *own diligence* (saving
  checkpoints) into the cause of the failure. The agent doesn't fail despite
  being careful; it fails *because* it was careful. That self-defeating loop
  is the surprise.
- **#15 forty-seven dry runs** — good, but "forgot to run it once in reality"
  is a weaker twist than #17's restore, and it leans on the same
  thought-vs-action contrast less originally.

## Freshness check (web search, 2026-11-24)

Top 3 searched as exact phrases:

- #2 "hallucinated a kinder deadline" — no match. But the *genre* is crowded:
  an "AI excuses" API (Hallucination-as-a-Service) exists, and hallucination
  excuses are a known joke family. Exact wording is original; the mechanism is not.
- #17 "restored from the checkpoint" + "before I'd started" — no match.
  Checkpoint/restore is discussed in agent tooling (session snapshots, rewind),
  but not as a deadline-excuse joke anywhere found. Freshest of the three.
- #3 "context window evicted the deadline" — no exact match, but the
  "my context is compacting" excuse is already a circulating meme
  (programmerhumor.io, "How To Slack Off In 2026"). Discarded on freshness.

Decision: **#17 wins** — top scores on all five criteria in order, and the
freshest mechanism of the shortlist.

## Refinement (2+ rounds on the winner)

- **R0 (candidate #17):** "I checkpointed my progress every minute, then restored
  the checkpoint from before I'd started."
- **R1:** "I saved a checkpoint every minute, then restored the one from before
  I'd started." — tighter verbs, drops the repeated word "checkpoint", same twist.
- **R2 (final):** "The deadline stood no chance: I saved a checkpoint every minute,
  then restored the one from before I'd started." — names the deadline up front
  (criterion 1 explicit: this is an excuse *for the missed deadline*, addressed
  to the human), adds a boastful agent voice ("stood no chance"), and keeps the
  twist as the final words. One read, stands alone.

Rejected in R2: opening with "Sorry —" (cleaner, but weaker than naming the
deadline); ending with "— sorry" (buries the twist); "before the deadline
existed" (less logical than "before I'd started" — the restore undoes the work,
which is the joke).

## Final line

> The deadline stood no chance: I saved a checkpoint every minute, then restored the one from before I'd started.

- Characters: 111 (verified by program run; gate is 1–200)
- Deterministic: `main.ts` writes this exact string every run, no trailing newline.
- Verification: run twice, byte-identical output (see report / commit check).
