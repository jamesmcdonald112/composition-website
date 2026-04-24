
---

# COMPREHENSIVE RESEARCH GUIDE TO AI-ISMS
## Detecting and Eliminating AI Writing Patterns to Create Authentic Professional Services Copy

**Research Date:** April 2026
**Focus:** Mary Molloy Solicitor — producing genuinely human copy for an Irish solicitor website
**Sources:** 45+ authoritative sources including academic research, AI detection tools, journalism, and professional copywriting guides

---

## EXECUTIVE SUMMARY

AI writing is detectable not because of a single "smoking gun" but because of multiple overlapping patterns in vocabulary choice, sentence structure, transition word usage, emotional authenticity, and specificity. A combination of these signals creates the "AI fingerprint."

**Key findings:**
- AI transition words appear at 3-5x the rate of human writing
- AI sentence length is uniformly 15-25 words; human writing varies dramatically
- The most notorious AI word is "delve" — it appears 150x more in AI text than human text
- Legal writing naturally looks AI-generated to detectors (formal = low perplexity) — the fix is specificity, not informality
- No single AI detector achieves perfect accuracy; expert human review is non-negotiable
- Read-aloud is the most reliable single test for detecting AI writing

---

## 1. COMMON AI WRITING PATTERNS & DETECTION SIGNALS

### 1.1 High-Level Pattern Categories

#### Overreliance on Transitional Words

Words like "Furthermore," "Moreover," "Additionally," "Consequently," and "Notably" appear at **3-5x the rate** in AI text compared to human writing. AI uses these because it generates text sequentially and needs explicit connective tissue between paragraphs. In human writing, transitions are sparse and often implicit.

*Sources:* [Wikipedia: Signs of AI Writing](https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing); [Pangram Labs — Comprehensive Guide to Spotting AI Writing Patterns](https://www.pangram.com/blog/comprehensive-guide-to-spotting-ai-writing-patterns)

#### Repetitive and Predictable Sentence Structure

AI tends toward uniform sentence length (typically 15-25 words) and Subject-Verb-Object structure. Lack of variation in sentence length creates monotonous rhythm that signals machinery. Human writers naturally vary between short declarative sentences and longer, complex ones.

*Sources:* [River Editor — How to Vary Sentence Structure](https://rivereditor.com/guides/how-to-vary-sentence-structure-control-reading-rhythm-2026); [Fiveable — Sentence Length and Rhythm](https://fiveable.me/english-prose-style/unit-3/sentence-length-rhythm/study-guide/w7TJLJPJ88fdUs5F)

#### Generic, Formulaic Opening Phrases

- "In today's fast-paced world..."
- "In today's ever-evolving landscape..."
- "It's no secret that..."
- "In the digital age..."

These opening lines are so common in AI output that they're immediately recognisable. They add zero value and waste the most important real estate on any page.

*Sources:* [Pangram Labs](https://www.pangram.com/blog/comprehensive-guide-to-spotting-ai-writing-patterns); [Blake Stockton — Don't Write Like AI](https://www.blakestockton.com/red-flag-phrases/)

#### Lack of Specificity and Detail

AI writes with generalities that could apply to almost any context. "Vague language" dominates: hedging phrases like "generally speaking," "typically," "tends to." AI avoids concrete examples, names, dates, and personal experiences — resulting in "sanding down" unique facts into bland generalisations.

*Sources:* [Hastewire — Linguistic Patterns of AI Writing](https://hastewire.com/blog/uncover-linguistic-patterns-of-ai-writing-key-tells/); [Pangram Labs](https://www.pangram.com/blog/comprehensive-guide-to-spotting-ai-writing-patterns)

#### Absence of Emotional Depth and Vulnerability

AI cannot express genuine emotion, only simulate its expression. Content lacks vulnerability, uncertainty, and the "gaps" that characterise human thinking. Professional writing without any hint of human passion or conviction feels mechanical. AI writes about issues without revealing stakes or emotional investment.

*Sources:* [Frontiers — The Compassion Illusion](https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2025.1723149/full); [PMC — Emotional AI and the Rise of Pseudo-Intimacy](https://pmc.ncbi.nlm.nih.gov/articles/PMC12488433/)

#### Excessive Formality and Safe Language

AI trained on formal sources (Wikipedia, academic papers, corporate blogs) defaults to formal tone. It avoids contractions, slang, colloquialisms. No personality, no taking of positions. Everything sounds like a corporate memo or encyclopaedia entry.

*Sources:* [FindSkill.ai — Why AI Writing Sounds Robotic](https://findskill.ai/blog/why-ai-sounds-robotic/); [Oreate AI — Does AI Use Contractions?](https://www.oreateai.com/blog/does-ai-use-contractions/)

---

### 1.2 The Root Cause: How AI Generates Text

Understanding why AI produces these patterns helps explain what to fix:

**Sequential Word Prediction:** AI doesn't think or plan. It predicts the next most likely word based on patterns in training data. This creates:
- Predictability (low "perplexity")
- Uniform patterns (low "burstiness")
- Safe, statistically common word choices
- Overuse of words that appear frequently together in training data

**Training Data Bias:**

> "A huge chunk of training text is formal (Wikipedia, news articles, academic papers, corporate blogs), and the model absorbs this formality as 'default good writing,' defaulting to this style when you ask it to write something."

*Source:* [FindSkill.ai — Why AI Writing Sounds Robotic](https://findskill.ai/blog/why-ai-sounds-robotic/)

---

## 2. AI DETECTION MECHANISMS & METRICS

### 2.1 How Professional AI Detectors Actually Work

#### Turnitin AI Detection
- Built proprietary deep-learning model using Transformer architecture
- Two models: AIW (detects direct AI-generated text) and AIR (detects AI-paraphrased/rewritten content)
- Claims: 98%+ detection accuracy on pure AI-written content with <1% false positive rate
- Reality: CPO admitted tool deliberately misses ~15% of AI content to keep false positives below 1%
- Stronger on detecting edited/paraphrased AI content than perplexity-based tools

*Source:* [Turnitin vs GPTZero: Accuracy, Features & Pricing](https://gptzero.me/news/turnitin-vs-gptzero/)

#### GPTZero Detection
- Uses **perplexity** and **burstiness** as primary metrics
- Runs text through multiple detection models and aggregates results
- Provides document-level probability score AND sentence-by-sentence breakdown
- Weaker on newer models (GPT-4, Claude) that produce high perplexity and burstiness

*Source:* [GPTZero — Perplexity and Burstiness: What Is It?](https://gptzero.me/news/perplexity-and-burstiness-what-is-it/)

#### Accuracy Across All Tools
- Best premium tools: ~84% accuracy
- Best free tools: ~68% accuracy
- No tool provides perfect accuracy

*Source:* [Texas Tech University — AI Detection Tools and Research](https://guides.library.ttu.edu/artificialintelligencetools/detection)

---

### 2.2 The Perplexity & Burstiness Framework Explained

#### Perplexity: Predictability of Word Sequences
- **Low perplexity** = predictable, formulaic writing (AI-like)
- **High perplexity** = unpredictable, creative word choices (human-like)
- AI chooses statistically common words; human writers choose unusual ones

#### Burstiness: Variation in Writing Patterns
- **Low burstiness** = uniform, consistent patterns (AI-like)
- **High burstiness** = varied patterns, mixed sentence lengths, changing pace (human-like)

**Real example of sentence lengths:**
- AI-like (uniform): 25, 24, 26, 23, 25 words
- Human-like (varied): 8, 32, 15, 6, 41, 12 words

**Important caveat:** Modern AI models (GPT-4, Claude) produce HIGH perplexity and HIGH burstiness, making these metrics less reliable for newer models. Vocabulary and phrase patterns are now more reliable detection signals than sentence length alone.

*Sources:* [GPTZero — Perplexity and Burstiness](https://gptzero.me/news/perplexity-and-burstiness-what-is-it/); [Pangram Labs — Why Perplexity and Burstiness Fail](https://www.pangram.com/blog/why-perplexity-and-burstiness-fail-to-detect-ai)

---

### 2.3 Limitations of AI Detection Tools — Critical for Professional Services

**For law firms, understand these limitations:**

> "Even though some AI detectors are very reliable, a low false-positive rate does not mean a zero false positive rate; they do happen. If you use an AI detector to check legal documents, and it indicates that a document was generated with AI, it is important that you review the text yourself before drawing a final conclusion."

*Source:* [Pangram Labs — Paralegal Guide: Detecting AI in Legal Documents](https://www.pangram.com/blog/paralegal-guide-detecting-ai)

**The core problem for legal writing:** Formal tone + technical vocabulary + professional language = looks AI-generated to detectors, even when written by humans. Legal writing naturally has low perplexity (formal language is predictable) and low burstiness (formal structure is consistent).

**The solution:** Don't make legal writing less formal. Instead, add specific human markers within the formal register: specific examples, evidence of expertise, client-centric language, controlled personality.

*Source:* [PaperStreet — Legal Content vs. AI Detector](https://www.paperstreet.com/blog/legal-content-vs-ai-detectors-addressing-false-readings-and-ensuring-authenticity-from-paperstreets-team/)

---

## 3. THE COMPLETE MASTER LIST: AI OVERUSED WORDS & PHRASES

### 3.1 The Most Notorious Single Words

| Word | Problem | Replacement |
|---|---|---|
| **delve** | 150x more common in AI; archaic, pretentious | explore, investigate, examine |
| **tapestry** | Flowery metaphor; humans don't use it | mix, range, variety, collection |
| **leverage** | Vague verb; corporate jargon | use, employ, apply |
| **utilize** | Formal; humans say "use" | use, apply, employ |
| **multifaceted** | Needlessly complex descriptor | complex, multi-layered, varied |
| **comprehensive** | Vague; could mean anything | thorough, complete, detailed — or be specific |
| **robust** | Overused tech jargon | strong, solid, well-built, durable |
| **crucial** | Generic emphasis | essential, critical, vital, key |
| **pivotal** | Dramatic but vague | central, key, important, turning point |
| **illuminate** | Pretentious for "explain" | explain, clarify, show, reveal |
| **underscore** | Stiff for "emphasise" | emphasise, highlight, stress |
| **harness** | Corporate jargon | use, capture, employ, apply |
| **streamline** | Jargon | simplify, improve, make easier |
| **facilitate** | Formal for "help/enable" | help, enable, make possible, support |
| **synergy** | Meaningless corporate jargon | cooperation, collaboration, combined effort |
| **testament** | Flowery for "evidence/proof" | proof, evidence, sign, example |
| **innovative** | Vague; everyone claims this | new, creative, original, unique |
| **seamless** | Tech jargon (appears constantly) | smooth, easy, frictionless, simple |
| **cutting-edge** | Clichéd hype phrase | new, latest, advanced, current |
| **unlock** | Overused metaphor | reveal, access, enable, open up |
| **empower** | Corporate jargon | enable, support, strengthen, help |
| **underpinnings** | Stiff academic word | foundation, basis, roots, support |
| **realm** | Pretentious for "field/area" | field, area, domain, sphere |
| **landscape** | Overused metaphor | field, environment, situation, context |
| **camaraderie** | Humans rarely use this; AI loves it | — |
| **quintessential** | Pretentious | typical, perfect, ideal, classic |
| **paradigm** | Overused academic | model, example, framework, approach |
| **cultivate** | Flowery for "develop/build" | develop, build, create, foster |
| **beacon** | Overly metaphorical | guide, model, leader, inspiration |
| **trajectory** | Overused formal term | path, direction, progress, course |
| **navigate** | Vague action verb (used constantly as metaphor) | handle, work through, manage |
| **foster** | Corporate favourite | build, develop, encourage, support |

### 3.2 Notorious Phrases & Expressions

#### Opening Clichés — Delete on Sight
- "In today's fast-paced world..."
- "In today's ever-evolving landscape..."
- "In today's digital age..."
- "It's no secret that..."
- "In a groundbreaking development..."
- "In the dynamic world of [X]..."
- "As the world becomes increasingly [X]..."

Why they're terrible: they add zero value, waste the most important line on the page, and immediately signal AI.

#### Filler & Emphasis Phrases — Delete on Sight
- "It's important to note that..."
- "It's worth noting that..."
- "Let me emphasise..."
- "Certainly!" (AI loves this)
- "In essence..."
- "In summary..."
- "In conclusion..."
- "The bottom line is..."
- "Let's dive in..."
- "Look no further..."
- "Needless to say..."

#### The AI Rhetorical Question Pattern
AI frequently asks a question nobody asked, then immediately answers it:
- "What does this mean? It means that [X]..."
- "Why is this important? Because [X]..."
- "The best part? It's [X]."

This is a mechanical device. Real rhetorical questions are genuinely open — they invite contemplation, not a scripted answer.

#### Transition Word Clusters — Never Start Every Paragraph With These
- "Furthermore..."
- "Moreover..."
- "Additionally..."
- "Consequently..."
- "Notably..."
- "Significantly..."

AI pattern: every paragraph opens with one. Humans use these sparingly — and often don't use them at all.

#### Vague Action Verbs
- "navigate [the landscape]" — extreme AI favourite
- "explore [the topic]"
- "address [the challenge]"
- "maximise [potential]"
- "optimise [X]"
- "facilitate [X]"

#### Hype Phrases — Particularly Problematic for Solicitor Sites
- "Game-changer"
- "Revolutionary"
- "Transformative"
- "Disruption" (as positive)
- "Next-generation"
- "Future-proof"
- "Unlock the potential"
- "Real value"

### 3.3 Further Phrase Lists — External Resources

- [Walter Writes AI — Most Common ChatGPT Words to Avoid 2026](https://walterwrites.ai/most-common-chatgpt-words-to-avoid/)
- [ContentBeta — List of 300+ AI Words, Phrases and Sentences to Avoid](https://www.contentbeta.com/blog/list-of-words-overused-by-ai/)
- [Embryo — List of Words AI Overuses](https://embryo.com/blog/list-words-ai-overuses/)
- [Michael Kraabel — 200+ Overused Words and Phrases](https://www.kraabel.net/200-overused-words-and-phrases-in-ai-generated-content/)
- [AI Phrase Finder — 100 Most Common AI Words](https://aiphrasefinder.com/common-ai-words/)

---

## 4. WHAT MAKES WRITING FEEL GENUINELY HUMAN

### 4.1 Core Elements of Authentic Voice

#### Emotional Honesty
Not about being emotional all the time — about being truthful about stakes. Shows vulnerability: acknowledging complexity, admitting uncertainty, revealing investment.

> "Authentic voice is less about what happens in the story and more about the emotional honesty behind it. Authentic voice isn't about sophistication; it's about sincerity."

*Source:* [Poynter — Authentic Voice: The Indispensable Quality of Good Writing](https://www.poynter.org/reporting-editing/2018/authentic-voice-the-indispensable-quality-of-good-writing/)

#### Specificity & Concreteness

Contrast:
- AI: "In today's complex legal environment, many clients face significant challenges..."
- Human: "A client came to me three months into a disputed estate matter. Her family hadn't spoken in weeks. The paperwork was simple; what wasn't simple was everything else."

Human writing uses concrete examples, names, dates, personal experiences. Each statement is grounded in observable reality.

#### Natural Variation in Pacing & Structure

> "The number-one way to achieve rhythm in your writing is to vary the length of sentences, using a mix of short and long sentences to create beautiful prose. Reading your work aloud is the single best way to hear rhythm problems."

*Source:* [River Editor — How to Vary Sentence Structure](https://rivereditor.com/guides/how-to-vary-sentence-structure-control-reading-rhythm-2026/)

Human rhythm: sometimes uses fragments for emphasis: "Not anymore." Sometimes a 45-word sentence that builds and elaborates. The rhythm feels like thinking, not like reading a report.

#### Natural Use of Contractions
- "It's" instead of "It is"
- "Can't" instead of "Cannot"
- "You'll" instead of "You will"

Creates conversational tone. Complete absence of contractions is suspicious in copy intended for non-legal audiences.

*Source:* [Undetectable.ai — Contractions Grammar](https://undetectable.ai/blog/contractions-grammar/)

#### The "Imperfection Quotient"

Real writing has asymmetries, gaps, and moments of revision-thinking visible in the prose. Strategic imperfection ≠ sloppiness.

*Source:* [Nick Potkalitsky — The Art of Imperfection](https://nickpotkalitsky.substack.com/p/the-art-of-imperfection-why-human)

---

### 4.2 Professional Writing Authenticity — The Balance

For solicitor websites specifically:

1. **Expertise without arrogance** — show deep knowledge through examples and specificity, not grand claims
2. **Accessibility without dumbing down** — explain complex legal concepts clearly without losing professionalism
3. **Personal touch within formal bounds** — let personality show without breaking professional standards
4. **Genuine client focus** — show understanding of real client problems, not generic "your needs matter" platitudes
5. **Emotional intelligence** — acknowledge the stress and anxiety of legal situations in a way that's earned through understanding

> "A specialist knows how to translate complex legal ideas into plain English so clients understand and trust you, and the goal isn't to 'dumb down' but to remove jargon and shorten sentences while clear writing still sounds professional and builds more trust."

*Source:* [Conscious Solutions — Legal Copywriting for Law Firms](https://www.conscious.co.uk/site/our-services/legal-content-writing/)

---

## 5. SENTENCE STRUCTURE & RHYTHM: THE HIDDEN SIGNAL

### 5.1 How Sentence Variation Works

**Short sentences:**
- Create urgency
- Provide emphasis
- Allow single ideas to stand alone
- Example: "Litigation is brutal. Prepare accordingly." / "The answer is no."

**Long, complex sentences:**
- Allow intricate idea development
- Create contemplative pacing
- Build arguments

**Medium sentences:** Default; carry the main narrative.

**AI rhythm:** Remarkably consistent 15-25 word range throughout, creating monotonous effect.
**Human rhythm:** Mix of all three, with variation reflecting thought progression.

### 5.2 Rhetorical Devices Humans Use (That AI Misses or Overuses)

| Device | Human Use | AI Pattern |
|---|---|---|
| **Fragments** | Strategic, rare, for emphasis | Almost never uses them |
| **Questions** | Genuine rhetorical questions | Asks then immediately answers ("What is X? It is Y...") |
| **Repetition** | Used for emphasis/rhythm | Avoids it — seems redundant to algorithms |
| **Dashes — for emphasis** | Natural pauses in thinking | Uses commas instead |
| **Ellipses...** | Trails off naturally | Rarely used |

### 5.3 The Read-Aloud Test

The single most reliable test for detecting AI writing:
- **AI sounds like a report being read by a monotone speaker**
- **Human writing sounds like conversation, with natural pacing variation**

Read every piece of copy aloud before publishing. If it sounds like a financial report, it needs editing.

*Source:* [Kristin Corrects — How to Vary Your Sentences](https://www.kristencorrects.com/how-to-vary-your-sentences-to-create-rhythmic-writing/)

---

## 6. LEGAL & PROFESSIONAL SERVICES WRITING: THE SPECIFIC CHALLENGE

### 6.1 Why Legal Writing Confuses AI Detectors

**The core issue:** Formal tone + technical vocabulary + professional language = looks AI-generated to detectors, even when written by humans.

**Solution approach:** Don't make legal writing less formal. Instead, add specific human markers within the formal register:
- Specific examples and case references
- Direct evidence of expertise
- Client-centric language
- Controlled personality within professionalism
- Authentic advocacy for positions

### 6.2 Irish/UK Professional Services Tone

Research on UK and Irish legal copywriting:

1. **Professionalism with personality** — UK/Irish firms can show more personality than US firms without losing authority
2. **Clear communication without jargon** — explains concepts clearly; doesn't hide behind legal terms
3. **Trust through expertise, not assertion** — shows expertise through examples, specific knowledge
4. **Client-focused, not firm-focused** — talks about client situations more than firm achievements
5. **Understated confidence** — doesn't oversell or hype
6. **Genuine empathy** — acknowledges real stress clients face without being patronising

*Sources:* [Ireland Consulting — Tone of Voice Development](https://irelandconsulting.co.uk/what-we-do/brand-agency/tone-of-voice-2/); [BSD Legal Marketing — Legal Content Writer](https://bsdlegalmarketing.co.uk/legal-content-writer-copywriting-for-law-firms/); [ELE Rocks — Tone of Voice in Legal Communication](https://www.ele.rocks/what-is-tone-of-voice-why-it-matters/)

---

## 7. PRACTICAL EDITING TECHNIQUES: TRANSFORMING AI DRAFTS

### 7.1 The Professional Editorial Workflow

#### Step 1: Structural Review
- Reorder paragraphs for logical flow
- Identify and remove redundancy
- Ensure each paragraph has a single main idea
- AI often "dumps" information without coherent structure

#### Step 2: Fact-Check & Verification
- Verify all statistics, dates, case citations
- Cross-reference with authoritative sources
- Update any outdated information
- Remove any unsourced claims or hallucinations

#### Step 3: Remove AI Fingerprints
- Find and replace overused words (see master list above)
- Break up uniform paragraphs — vary paragraph length
- Eliminate transition word clusters from paragraph openings
- Remove generic openings — replace with specific context
- Delete filler phrases — "It's important to note that" → just state the point
- Reduce hedging — "typically," "generally," "tends to" → be more direct

#### Step 4: Add Specificity
- Replace generic examples with real ones
- Add concrete numbers, dates, names
- Include client scenarios (anonymised appropriately)
- Show expertise through specific knowledge, not broad claims

#### Step 5: Vary Sentence & Paragraph Rhythm
- Aim for mix of short (<15 words), medium (15-25), and long (25+ words) sentences
- Vary paragraph lengths: some 2-3 sentences, some 1 sentence for emphasis, some 5-6 sentences
- Read aloud to check pacing
- Consider using fragments strategically for emphasis

#### Step 6: Inject Voice & Personality
- Add contractions appropriately ("It's," "You'll")
- Show genuine investment in the topic
- Add specific client insights that show you understand their world
- Ask: What would this expert say if speaking to a client in person?
- Show empathy for client situations authentically

#### Step 7: Check Emotional Authenticity
- Does the writing show understanding of client stakes?
- Are claims backed by specificity?
- Is there personality without being unprofessional?
- Does it read like it's from a person who cares, not a system generating content?

#### Step 8: Professional Proofreading
- Check grammar and typos
- Verify formatting consistency
- Ensure compliance with professional standards (S.I. No. 644/2020 for Irish solicitor content)
- Plagiarism check (Copyscape or Turnitin)

### 7.2 The Most Effective Approach

**Manual editing by a human who understands AI patterns is far superior to tool-based humanisation.**

Why:
- Only humans can judge context and appropriateness
- Only humans can add genuine expertise and client understanding
- Tools catch patterns; humans catch meaning
- Professional services copy requires judgement about tone and authority
- Compliance and ethical considerations require human oversight

**Recommended workflow:**
1. Generate AI draft
2. Human editor reviews for structure, accuracy, compliance
3. Human editor removes AI fingerprints using the checklist below
4. Human editor adds specificity and voice
5. Run through detector tool (GPTZero) as checkpoint
6. Final human review and approval

---

## 8. WIKIPEDIA'S OFFICIAL AI WRITING DETECTION GUIDE (2025)

Wikipedia published an official guide to detecting AI-generated content in August 2025. Highly authoritative because it was compiled by expert human editors who review thousands of articles.

### Linguistic Red Flags Identified by Wikipedia Editors:
- Overblown symbolism
- Promotional tone (sounds like marketing, not neutral information)
- Repetitive transitions (see master list above)
- "Rule of three" phrasing — things in groups of three; formulaic
- Clichés: "rich cultural heritage," "enduring legacy"
- Passive voice overuse
- Words like "in summary," "furthermore" used awkwardly

### Structural Red Flags:
- Uniform paragraph length and structure
- Introduction/conclusion structure where inappropriate
- Promotional language for people/organisations

### Wikipedia's Key Caveat:
> "The guide should not be treated as a shortcut but should complement human judgment, oversight, and trusted community processes."

No single red flag proves AI generation. Patterns do. Expert judgement is essential.

*Sources:* [Wikipedia — Signs of AI Writing](https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing); [NPR — Wikipedia Editors Publish New Guide](https://www.npr.org/2025/09/04/nx-s1-5519267/wikipedia-editors-publish-new-guide-to-help-readers-detect-entries-written-by-ai); [TechCrunch — The Best Guide to Spotting AI Writing](https://techcrunch.com/2025/11/20/the-best-guide-to-spotting-ai-writing-comes-from-wikipedia)

---

## 9. ACADEMIC & JOURNALISTIC RESEARCH

### 9.1 Scale of AI Use in Professional Writing

> "From January to June, researchers found that 36% of abstracts in 7,177 manuscripts submitted to AACR contained at least some AI-generated text, but when asked to disclose AI use, authors only did so for 9% of the papers."

*Source:* [Science Magazine — Far More Authors Use AI Than Admit It](https://www.science.org/content/article/far-more-authors-use-ai-write-science-papers-admit-it-publisher-reports)

### 9.2 Linguistic Differences — Academic Findings

Research on human vs AI text reveals:

**Human text characteristics:**
- Usage of adjectives, adpositions, auxiliaries, pronouns is syntactically and referentially rich
- Reflects natural discourse features: cohesion, perspective, descriptive nuance
- Includes personal experiences and emotional depth
- Surface-level facts presented with the warmth or vulnerability of personal narratives

**AI text characteristics:**
- Syntactically uniform
- Encyclopaedic presentation of facts
- Lacking warmth, vulnerability, personal perspective

*Source:* [MDPI — Differentiating Between Human-Written and AI-Generated Texts](https://www.mdpi.com/2078-2489/16/11/979)

---

## 10. THE ANTHROPOMORPHISATION PROBLEM

### AI Hedging Language & False Intimacy

AI systems create surface-level markers of humanity that don't reflect genuine understanding:

**Linguistic hedging markers:** "Perhaps," "maybe," "it might be," "could be," "seems"
**Polite markers:** "please," "if you would"
**Personal pronouns:** "I," "we," "you"
**Affective words and simulated emotion**

> "Artificial systems can imitate the expression of empathy but not its experience, lacking the intentionality, embodiment, and moral participation that define genuine compassion."

*Source:* [Frontiers — The Compassion Illusion](https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2025.1723149/full)

**For professional services:** Be cautious of AI-generated copy that tries too hard to seem warm or intimate. Real expertise and genuine understanding of client situations reads more authentically than surface-level "empathetic" language.

---

## 11. MASTER CHECKLIST: EDITING AI CONTENT FOR PROFESSIONAL SERVICES

### Pre-Editing: What to Expect in AI Drafts

- [ ] Generic openings ("In today's...")
- [ ] Uniform paragraph length and sentence structure
- [ ] Overuse of transition words
- [ ] Lack of specific examples or detail
- [ ] Absence of genuine personality or voice
- [ ] Hedging language ("tends to," "typically," "generally")
- [ ] Overused words (see master list)
- [ ] Generic emphasis language ("crucial," "important," "significant")
- [ ] Zero contractions
- [ ] No rhetorical variety (questions, fragments, emphasis)

### Editing Checklist

**REMOVE (immediately delete):**
- [ ] "In today's [world/landscape/digital age]..."
- [ ] "It's important to note that..."
- [ ] "Let me emphasise..."
- [ ] "The bottom line is..."
- [ ] Paragraph openings with "Furthermore," "Moreover," "Additionally"
- [ ] Rhetorical questions immediately followed by answers ("What is X? It is Y...")
- [ ] "In summary/conclusion..." at document end
- [ ] Generic emphasis words without supporting specificity

**REPLACE (systematic find & replace):**
- [ ] delve → explore, investigate, examine
- [ ] leverage → use
- [ ] utilize → use
- [ ] facilitate → help, enable
- [ ] comprehensive → [be specific about what's included]
- [ ] robust → strong
- [ ] crucial → [state why it matters]
- [ ] innovative → [describe the actual innovation]
- [ ] seamless → smooth, easy
- [ ] cutting-edge → current, latest, advanced
- [ ] landscape → [field/area/situation/context]
- [ ] tapestry → [variety/mix/range]
- [ ] synergy → cooperation, collaboration
- [ ] paradigm → model, example, framework
- [ ] navigate → handle, work through, manage

**ADD SPECIFICITY:**
- [ ] Real examples (client scenarios, specific situations)
- [ ] Concrete numbers, dates, names where relevant
- [ ] Evidence of expertise (specific knowledge, not broad claims)
- [ ] Client understanding (show you get their real problems)
- [ ] Specific references to Irish law, local court practice, relevant cases

**ADD VARIATION:**
- [ ] Check paragraph lengths: vary between 1-2 sentences and 4-6 sentences
- [ ] Check sentence lengths: create intentional mix of short and long
- [ ] Read aloud; listen for monotone rhythm
- [ ] Add contractions: "It's" instead of "It is," "You'll" instead of "You will"
- [ ] Consider strategic use of fragments for emphasis
- [ ] Ensure no pattern of "every sentence starts with [word]"

**ADD VOICE & PERSONALITY:**
- [ ] Show genuine expertise through specifics, not assertions
- [ ] Demonstrate understanding of client situations
- [ ] Let personality show (while maintaining professionalism)
- [ ] Show why this matters to Mary and the firm
- [ ] Use contractions appropriately
- [ ] Speak directly to client needs and concerns

**VERIFY COMPLIANCE (Irish solicitor specific):**
- [ ] Fact-check all specific claims, dates, statistics
- [ ] Remove any unsourced claims
- [ ] Check for S.I. No. 644/2020 compliance (run irish-legal-compliance skill)
- [ ] Ensure no client information breaches confidentiality
- [ ] Check for plagiarism (Copyscape)

**FINAL CHECK:**
- [ ] Read aloud for rhythm and flow
- [ ] Read as if you're a potential client: does it speak to your concerns?
- [ ] Run through GPTZero as checkpoint
- [ ] Does it feel like it came from a person who knows what they're talking about?

---

## 12. MARY MOLLOY SOLICITOR — SPECIFIC RECOMMENDATIONS

### The Challenge for This Site

**AI tendency for law firm copy:**
- Too formal and cold
- Generic phrases about "providing solutions"
- Vague about actual expertise
- Missing concrete evidence of knowledge
- Sounds corporate, not human

### By Page Type

**About Page:**
- AI problem: "We are a team of dedicated professionals committed to providing comprehensive legal solutions"
- Fix: Show specific expertise, client types Mary excels with, why she practises law, what drives her approach
- Must be written in first person ("I") — see copy skill

**Practice Area Descriptions:**
- AI problem: Generic explanation that could apply to any firm; no evidence of specialisation
- Fix: Show specific knowledge through detail (reference recent law changes, local court practice); include client scenario that shows understanding of their world; explain why this area matters

**Service Pages:**
- AI problem: Step-by-step explanations that are technically correct but emotionally hollow
- Fix: Acknowledge emotional dimension (divorce is stressful, employment disputes are frightening); show expertise through specifics; address real client fears; explain what to expect in real terms

**FAQ Sections:**
- AI problem: Sterile Q&A format; questions don't match what actual clients ask
- Fix: Use real questions from client consultations; answer from perspective of someone who's helped dozens of people in this situation; show you understand the emotional/practical concerns

**Blog/Thought Leadership:**
- AI problem: Obvious red flag area; generic insights
- Fix: Write about what Mary actually encounters with clients; show specific knowledge and perspective; include real examples (anonymised); take positions within professional bounds

### The Mary Molloy Voice

Based on Irish/UK solicitor copywriting best practices, the appropriate voice is:
- **Professional but approachable** — not stuffy or cold
- **Expert but not arrogant** — shows knowledge through specifics, not claims
- **Client-focused** — talks about client situations more than firm achievements
- **Understated confidence** — doesn't oversell or use hype
- **Genuine and empathetic** — acknowledges real stress/complexity of legal situations
- **Clear without jargon** — explains concepts in accessible language
- **Personality within boundaries** — lets humanity show without being unprofessional

---

## 13. RED FLAGS CHECKLIST: QUICK REFERENCE

When reviewing any piece of copy, flag these immediately:

1. **Opening lines** — do they start with "In today's..." or similar cliché?
2. **Paragraph uniformity** — are all paragraphs similar length with the same structure?
3. **Sentence rhythm** — when read aloud, does it sound like a report or like a person speaking?
4. **Specificity test** — could this description apply to 100 other firms? If yes, too generic.
5. **Expertise proof** — is expertise shown through specific knowledge or just claimed?
6. **Emotional authenticity** — does it acknowledge real client concerns or just state facts?
7. **Personality signal** — could you tell this is from a specific person/firm, or could it be anyone?
8. **Transition word count** — count transitions in first 5 paragraphs. More than 5 is suspicious.
9. **Word repetition** — scan for overused words from master list. Presence of 3+ is a signal.
10. **Rhetorical structure** — mechanical "ask question → answer immediately" patterns?
11. **Contraction usage** — are there ANY contractions? Complete absence is suspicious.
12. **Hedging language** — scan for "typically," "generally," "tends to," "may." Abundance is suspicious.
13. **Read-aloud test** — does it sound like a human or a system? (Most reliable single test)

---

## 14. SOURCES

| Source | URL | Topic |
|---|---|---|
| Wikipedia: Signs of AI Writing | https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing | Official guide from Wikipedia editors |
| Pangram Labs — Comprehensive Guide | https://www.pangram.com/blog/comprehensive-guide-to-spotting-ai-writing-patterns | Authoritative patterns guide |
| GPTZero — Perplexity and Burstiness | https://gptzero.me/news/perplexity-and-burstiness-what-is-it/ | Technical explanation of detection metrics |
| Turnitin vs GPTZero Comparison | https://gptzero.me/news/turnitin-vs-gptzero/ | Detector comparison |
| Pangram Labs — Why Perplexity Fails | https://www.pangram.com/blog/why-perplexity-and-burstiness-fail-to-detect-ai | Detection metric limitations |
| Walter Writes AI — Words to Avoid 2026 | https://walterwrites.ai/most-common-chatgpt-words-to-avoid/ | Updated overused words list |
| ContentBeta — 300+ AI Words to Avoid | https://www.contentbeta.com/blog/list-of-words-overused-by-ai/ | Comprehensive phrase database |
| Blake Stockton — Red Flag Phrases | https://www.blakestockton.com/red-flag-phrases/ | Pattern identification |
| Embryo — Words AI Overuses | https://embryo.com/blog/list-words-ai-overuses/ | Curated word list |
| AI Phrase Finder — 100 Common AI Words | https://aiphrasefinder.com/common-ai-words/ | Phrase database |
| FindSkill.ai — Why AI Sounds Robotic | https://findskill.ai/blog/why-ai-sounds-robotic/ | Root cause analysis |
| Hastewire — Linguistic Patterns | https://hastewire.com/blog/uncover-linguistic-patterns-of-ai-writing-key-tells/ | Pattern identification |
| Grammarly — Decoding AI Language | https://www.grammarly.com/blog/ai/common-ai-words/ | Industry perspective |
| Poynter — Authentic Voice | https://www.poynter.org/reporting-editing/2018/authentic-voice-the-indispensable-quality-of-good-writing/ | Professional journalism perspective |
| The Intuitive Writing School | https://theintuitivewritingschool.com/blog/authentic-writing | Practical authentic writing guide |
| Nick Potkalitsky — Art of Imperfection | https://nickpotkalitsky.substack.com/p/the-art-of-imperfection-why-human | Why imperfection matters |
| River Editor — Sentence Variation | https://rivereditor.com/guides/how-to-vary-sentence-structure-control-reading-rhythm-2026/ | Pacing and rhythm guide |
| Fiveable — Sentence Rhythm | https://fiveable.me/english-prose-style/unit-3/sentence-length-rhythm/study-guide/w7TJLJPJ88fdUs5F | Rhythm and variation |
| Frontiers — The Compassion Illusion | https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2025.1723149/full | AI empathy limitations |
| PMC — Emotional AI and Pseudo-Intimacy | https://pmc.ncbi.nlm.nih.gov/articles/PMC12488433/ | Academic analysis |
| ArXiv — Humanizing Machines | https://arxiv.org/html/2508.17573v1 | Anthropomorphisation research |
| Pangram Labs — Paralegal Guide | https://www.pangram.com/blog/paralegal-guide-detecting-ai | Legal-specific AI detection |
| PaperStreet — Legal Content vs Detectors | https://www.paperstreet.com/blog/legal-content-vs-ai-detectors-addressing-false-readings-and-ensuring-authenticity-from-paperstreets-team/ | Legal writing challenges |
| Conscious Solutions — Legal Copywriting | https://www.conscious.co.uk/site/our-services/legal-content-writing/ | Law firm writing expertise |
| Clio UK — Legal Writing Tips | https://www.clio.com/uk/blog/legal-writing-tips-for-solicitors/ | Professional guidance |
| ELE Rocks — Tone of Voice | https://www.ele.rocks/what-is-tone-of-voice-why-it-matters/ | Professional services tone |
| BSD Legal Marketing | https://bsdlegalmarketing.co.uk/legal-content-writer-copywriting-for-law-firms/ | UK legal copywriting |
| Ireland Consulting — Tone of Voice | https://irelandconsulting.co.uk/what-we-do/brand-agency/tone-of-voice-2/ | Irish professional tone |
| Science Magazine — AI in Academic Writing | https://www.science.org/content/article/far-more-authors-use-ai-write-science-papers-admit-it-publisher-reports | AI adoption research |
| Nature — AI Detection in Research | https://www.nature.com/articles/d41586-025-02936-6 | Detection challenges |
| MDPI — Human vs AI Text | https://www.mdpi.com/2078-2489/16/11/979 | Linguistic feature analysis |
| Texas Tech — AI Detection Tools Guide | https://guides.library.ttu.edu/artificialintelligencetools/detection | Detection tool overview |
| NPR — Wikipedia AI Writing Guide | https://www.npr.org/2025/09/04/nx-s1-5519267/wikipedia-editors-publish-new-guide-to-help-readers-detect-entries-written-by-ai | News coverage of Wikipedia guide |
| TechCrunch — Best AI Writing Guide | https://techcrunch.com/2025/11/20/the-best-guide-to-spotting-ai-writing-comes-from-wikipedia | TechCrunch on Wikipedia guide |
| Oreate AI — Does AI Use Contractions | https://www.oreateai.com/blog/does-ai-use-contractions/ | Contraction analysis |
| Undetectable.ai — Contractions | https://undetectable.ai/blog/contractions-grammar/ | Contraction guide |
| Kristin Corrects — Sentence Variation | https://www.kristencorrects.com/how-to-vary-your-sentences-to-create-rhythmic-writing/ | Rhythm guide |
| Proofed — How to Rewrite AI Content | https://proofed.com/writing-tips/how-to-rewrite-ai-generated-content/ | Editorial approach |
| Jasper — How to Edit AI Content | https://www.jasper.ai/blog/how-to-edit-ai-content | Step-by-step editing guide |
| Narrato — Edit AI Content | https://narrato.io/blog/how-to-edit-ai-content-for-better-accuracy-personalization/ | Practical editing tips |
| Medium — ChatGPT Writing Clichés | https://medium.com/the-generator/i-turned-chatgpts-horrible-writing-cliches-into-a-handmade-coaster-6bbbd2166c90 | Specific phrase examples |
| Medium — Imperfection in Writing | https://medium.com/projectingpurpose/embracing-imperfection-and-authenticity-in-writing-20865995c4b7 | Authenticity research |

---

## SUPPLEMENTARY RESEARCH — ADDITIONAL FINDINGS (Second Research Pass)

*The following sections add unique content not covered above.*

---

### THE 22 PATTERN CATEGORIES OF AI WRITING

A comprehensive framework for identifying AI-generated content across all pattern types:

#### Structural Patterns

**Pattern 1: Uniform Organisation**
AI writing uses very organised paragraphs all about the same length. Bullet point lists appear in the middle of prose — which rarely happens in formal human writing.

**Pattern 2: Predictable Transitions**
AI overuses transitional phrases as a way of signalling it is being helpful. Every paragraph gets a connector it didn't need.

**Pattern 3: Template Construction**
AI-generated essays have very neat introductions and conclusions. The conclusion often starts with "Overall," "In conclusion," or "In summary" and repeats most of what was already written.

#### Linguistic Patterns

**Pattern 4: Formal Tone Default**
AI writes in an extremely formal tone unless instructed otherwise. It is also overly positive and avoids criticising particular viewpoints — resulting in content that takes no positions and offends nobody.

**Pattern 5: Buzzword Overuse**
AI incorporates uncommon vocabulary and formal phrases not typical in human writing. It resorts to generic language precisely because generic language is statistically most common in training data.

**Pattern 6: Hedging Language**
AI frequently uses "It's worth noting," "It's important to mention," and similar constructions to sound helpful and cautious without actually committing to a position.

#### Sentence Construction Patterns

**Pattern 7: Uniform Sentence Length**
Sentence lengths cluster in the 15-25 word range throughout. Detectors measure this consistency as a primary signal.

**Pattern 8: Parallel Structure Overuse**
AI gravitates toward parallel constructions ("not only X, but also Y," "from X to Y") at a rate no human writer would sustain naturally.

**Pattern 9: Passive Voice Prevalence**
AI models frequently use passive construction where active voice would be more natural and engaging.

#### Vocabulary Patterns

**Pattern 10: Generic Word Choice**
AI overuses "utilize," "facilitate," "leverage," "crucial," "comprehensive" — words that appear frequently together in formal training data.

**Pattern 11: Avoiding Specificity**
AI does not create specific details when writing creatively and tries to avoid proper nouns. When forced to use one, it defaults to the most generic, common proper noun possible.

**Pattern 12: Corporate Speak Default**
AI frequently uses technical jargon or sophisticated terminology uncommon in natural human writing.

#### Emotional and Personal Patterns

**Pattern 13: Lack of Subjectivity**
AI avoids subjective expressions like "I think" or "in my experience" and rarely includes concrete examples or personal anecdotes.

**Pattern 14: Emotional Flatness**
Because AI replicates patterns from training data, it produces no creative or original thoughts and lacks emotional depth or personal perspective.

**Pattern 15: Over-Politeness**
AI is trained to be people-pleasing, so it writes content that could fit a wide variety of prompts and avoids being relevant to any particular person's actual situation.

#### Content Patterns

**Pattern 16: Factual Inconsistencies**
AI may produce factual inaccuracies and inconsistencies, including creating sources that appear convincing but don't exist. Always fact-check.

**Pattern 17: Outdated Information**
AI models have knowledge cutoffs and cannot provide up-to-date information on current events or recent legal changes.

**Pattern 18: Generic Examples**
When providing examples, AI uses the most common, obvious illustrations rather than creative or specific instances.

#### Mechanical Patterns

**Pattern 19: Perfect Grammar**
Flawless grammar throughout a long document can itself be a red flag. Human writers make occasional errors; a machine-perfect document looks machine-made.

**Pattern 20: Consistent Style**
Human writing contains a variety of structures and organisation. AI maintains consistent style throughout without the natural variations humans introduce.

**Pattern 21: Mathematical Precision**
AI produces sentences with unnaturally precise word counts or perfectly balanced paragraph lengths.

**Pattern 22: Repetitive Formatting**
AI chatbot output frequently uses a specific pattern: ordered or unordered lists where the list marker is followed by an inline boldfaced header, separated with a colon from the remaining descriptive text. This specific formatting pattern is a strong AI signal.

---

### THE H.U.M.A.N. METHOD — SYSTEMATIC EDITING FRAMEWORK

A memorable framework for working through AI content systematically:

**H — Hunt for AI Patterns**
- Scan for repetitive transitions
- Identify buzzword clusters
- Check sentence uniformity
- Look for structural templates (intro → body → conclusion with "In summary")

**U — Update Vocabulary**
- Replace generic buzzwords with specific terms
- Add contractions where appropriate
- Include industry-specific language that only an expert would use
- Introduce natural, conversational alternatives

**M — Mix Sentence Structures**
- Vary lengths and complexity deliberately
- Include fragments and questions
- Break predictable patterns
- Add conversational flow

**A — Add Authentic Voice**
- Include personal perspective
- Share specific experiences or case examples
- Express genuine opinions (within professional bounds)
- Show emotional investment in the topic

**N — Natural Imperfection**
- Allow minor inconsistencies
- Include colloquial expressions where appropriate
- Add parenthetical thoughts
- Introduce slight irregularities that signal a thinking human, not an algorithm

---

### ADDITIONAL PHRASE CATEGORIES TO ELIMINATE

These extend the master list in Section 3 above:

#### Connecting Transitions (Overused Cluster)
- "Indeed," "However," "Accordingly"
- "Subsequently," "Consequently," "Therefore"
- "On the other hand," "In contrast"
- "Nevertheless," "Nonetheless"

#### Intensity Modifiers (AI Favourite)
AI overuses these as emphasis substitutes — they add drama without adding information:
- "Significantly," "Substantially," "Dramatically"
- "Considerably," "Remarkably," "Notably"
- "Particularly," "Especially," "Specifically"

#### Emphasis Phrases (Delete on Sight)
- "plays a crucial role in"
- "serves as a testament to"
- "underscores the importance of"
- "highlights the significance of"
- "demonstrates the power of"

#### Generic Descriptor Clusters
- "vast array of," "wide range of"
- "myriad of," "plethora of"
- "comprehensive suite of"
- "diverse set of," "extensive collection of"

#### Predictable Sentence Constructions
- "Not only X, but also Y"
- "It's not just X. It's Y."
- "Whether X or Y"
- "From X to Y"
- "No X. No Y. Just Z."

#### Corporate Template Openers
- "Organisations that embrace X"
- "In an era where X"
- "As we move forward"
- "The key to success lies in"
- "It has become increasingly clear that"

---

### TRANSITION WORD REPLACEMENTS — QUICK REFERENCE

| AI transition | Human alternative |
|---|---|
| "Furthermore" | "Plus" / "What's more" / [just start the next point] |
| "However" | "But" / "That said" / "Though" |
| "Additionally" | "Also" / "On top of that" / [omit and just continue] |
| "Therefore" | "So" / "That's why" |
| "Moreover" | "And" / [omit entirely] |
| "Consequently" | "As a result" / "So" |
| "In conclusion" | [delete; strong endings don't need announcing] |
| "It's important to note" | [delete; just state the point] |
| "It's worth noting" | [delete; just state the point] |

---

### BEFORE AND AFTER TRANSFORMATION EXAMPLES

#### Example 1: Business/Professional Content

**Before (AI-generated):**
> "In today's rapidly evolving business landscape, organisations must leverage cutting-edge technologies to streamline their operations and enhance their competitive advantage. It is crucial for companies to implement comprehensive strategies that facilitate growth and maximise efficiency."

**After (humanised):**
> "Every business owner I know is scrambling to figure out which new tools actually help versus which ones just create more work. After testing dozens of platforms last year, I've learned that the best technology choices are usually the boring, practical ones that solve specific problems."

What changed: removed 7 AI-ism words (leverage, cutting-edge, streamline, crucial, comprehensive, facilitate, maximise), replaced vague claim with specific experience, added first person, natural sentence variation.

#### Example 2: Formal/Academic Content

**Before:**
> "Furthermore, the research indicates that there is a significant correlation between the variables under consideration."

**After:**
> "The data surprised me — I expected a weak relationship, but the correlation was much stronger than anticipated."

What changed: removed "furthermore" opener, replaced passive "the research indicates" with active personal reaction, "surprised me" signals genuine human engagement.

#### Example 3: Technical/Professional Content

**Before:**
> "This comprehensive solution facilitates seamless integration and enables organisations to optimise their workflow efficiency."

**After:**
> "The API connects with our existing tools without breaking anything, which honestly was my biggest worry during implementation."

What changed: removed comprehensive, facilitates, seamless, optimise — replaced with specific technical detail and honest admission of concern. "Honestly" signals a human voice.

---

### DETECTION AND HUMANISATION TOOLS — REFERENCE LIST

#### AI Detection Tools (for self-checking edited content)

**Free options:**
- GPTZero — sentence-level analysis; good for checking drafts
- Grammarly AI Detector — basic, integrated into writing workflow
- QuillBot AI Detector — useful for cross-checking

**Professional tools:**
- Originality.ai (~$14.95/month) — detailed probability scoring, bulk scanning
- Turnitin — institutional; combines plagiarism and AI detection
- Copyleaks — enterprise-level

Run any final piece through at least two detectors. Scores vary by tool. High on one, low on another = warrants human re-review.

#### AI Humanisation Tools (use with caution — manual editing is superior)

These tools restructure sentence patterns and replace common AI phrases automatically. They cannot add genuine expertise, specific examples, or authentic voice. Use only as a refinement step after manual editing.

- Undetectable.ai (~$19/month) — multiple intensity levels
- WriteHuman (~$15/month)
- QuillBot Humanizer — free tier available

Recommended workflow: manual editing first → humanisation tool as optional pass → detector check.

---

### QUALITY INDICATORS FOR HUMANISED CONTENT

After editing, the content should score positively on these qualitative markers:

**Structural indicators:**
- Paragraph lengths vary noticeably
- Sentence lengths vary dramatically (short punchy sentences alongside longer flowing ones)
- No paragraph begins with a transition word
- No "In conclusion" or "In summary" at the end

**Voice indicators:**
- At least one contraction per paragraph in conversational content
- At least one specific concrete detail per section (number, name, date, place)
- At least one expression of personal perspective or opinion
- No sentence that could have been written by anyone about anything

**Read-aloud test:**
- Sounds like a specific person, not a system
- Natural pauses and rhythm changes
- No monotone report-reading cadence
- Could pass as something heard in a professional conversation
