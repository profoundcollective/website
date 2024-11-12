---
layout: post
author: Profounder
comments: true
---

<div class="font-zilla" markdown="1">

<blockquote class="p-4 my-4 border-s-4 border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-gray-800">
    <p class="text-xl italic font-medium leading-relaxed text-gray-900 dark:text-white">
    'The most damaging phrase in the language is "We've always done it this way".' - Grace Hopper
    </p>
</blockquote>

**The aim of this post** is to provide deeper understanding as to why your team or organization should consider adopting Software Teaming (AKA Mob Programming). This will be a multipart series with each addressing common questions, pitfalls, or other relevant topics.

<hr class="border-b-2 border-gray-400 mb-6"/>

## Management: Why would I ever want four people writing the same line of code?


Actually, you want more. 

What we have seen in practice is effectively *developer only mobbing*, not *actual mob programming* that involves the entire team. 

What we mean here requires some explanation of what Mob Programming is and is not. 

Mob Programming certainly involves programmers; most commonly three to four of them. However, those numbers may vary depending on what your team is comfortable with. Who should be involved includes anyone and everyone involved in the creation of the software: Users. Analysts. Testers. Designers. Operations. Managers. 

In short, **everyone on the team** is part of working on what is most important.

What follows are just a few of the benefits you can expect to achieve through a whole team approach to software.

<hr class="border-b-2 border-gray-400 mb-6"/>

### Immediate feedback
Not only from the Users, but from Testers, Designers, and anyone else that you would normally have to wait on for answers. *Could it **be** more agile*?

Reduced <a href="https://learn.microsoft.com/en-us/azure/devops/report/dashboards/cycle-time-and-lead-time?view=azure-devops" class="link" target="_blank">Cycle and Lead Times</a> and no Wait Time or idle resources (although we hate referring to human beings as "resources"). Everyone is fully involved in the process. *Didn't the business want everyone to be <a href="https://jmlascala71.medium.com/utilization-considered-harmful-f992776e5e3e" class="link" target="_blank">fully utilized</a> as if they were machines (heavy sarcasm)?*
<hr class="border-b-2 border-gray-400 mb-6"/>

### Continuous Value
More than your standard <a href="https://trunkbaseddevelopment.com/continuous-review/#:~:text=Continuous%20Code%20Review%20is%20where,in%20front%20of%20peers%20quickly" class="link" target="_blank">Continuous Code Review</a>. While we are certainly proponents of <a href="https://trunkbaseddevelopment.com/" class="link" target="_blank">Trunk Based Development</a>, Mob Programming kicks it up a notch due to all eyes being on the code at *all times*. You can and should certainly check for mistakes in other ways (e.g. Pull Requests, CI Automation, etc.), but as we have known for decades, <a href="https://deming.org/inspection-is-too-late-the-quality-good-or-bad-is-already-in-the-product" class="link" target="_blank">"Inspection does not improve the quality, nor guarantee quality. Inspection is too late. The quality, good or bad, is already in the product. As Harold F. Dodge said, “You can not inspect quality into a product.”</a> 

The more minds involved throughout the process, the more inherent the quality will be. Versus attempting to "inspect quality into the product" or finding out later from dissatisfied (and ignored) Users. With Mobbing, the Users are there. They are a part of the process from beginning to end (as needed). 

We're not saying this will yield perfect code or perfect anything for that matter, but it will reduce waste and introduce quality where it belongs.
<hr class="border-b-2 border-gray-400 mb-6"/>

### Actual Agility
You want agility? You want to move quickly? You need stability and sanity. <a href="https://www.alfiekohn.org/punished-rewards" class="link" target="_blank">Human beings have been conditioned</a> to refrain from admitting fault or ignorance. This problem *may* be worse in the world of software (purely biased conjecture). 

Engineers are lauded for "<a href="https://stevemcconnell.com/articles/classic-mistakes" class="link" target="_blank">developer heroics</a>" even though we know this leads to fragile code and never-ending fires, the costs of which are difficult to measure. 

Engineers are encouraged to *always* have the answers, to never be wrong, for that would show weakness or admit inability to deliver. 

The Individual Contributor model has a time and a place, but for many complex messy problems, a team-based approach is the answer. If your <a href="https://en.wikipedia.org/wiki/Kanban_(development)" class="link" target="_blank">WIP</a> is one and the team is able to focus on the highest priority item, you have the greatest ability and agility to not only deliver with inherent quality, but to shift to something else if necessary. 

Shared Learning. Fast feedback. Continuous Collaboration and Experimentation. 

Agility.
<hr class="border-b-2 border-gray-400 mb-6"/>

### Reduced Cost
This is probably the biggest issue for management to see clearly. It's not specific to management. Most of us only think of cost as dollars and cents. We rarely think of the other forms of cost.

Going back to the original question, "*how can having so many people working on one thing be productive? It seems very expensive!*" 

Do you really want to focus so much on higher productivity and utilization? 

<blockquote class="p-4 my-4 border-s-4 border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-gray-800">
    <p class="text-xl italic font-medium leading-relaxed text-gray-900 dark:text-white">
    “There is nothing worse than doing the wrong thing well.” - Peter Drucker
    </p>
</blockquote>


Perhaps a heavier focus on efficiency?

<blockquote class="p-4 my-4 border-s-4 border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-gray-800">
    <p class="text-xl italic font-medium leading-relaxed text-gray-900 dark:text-white">
"The more efficient you are at doing the wrong thing, the wronger you become. It is much better to do the right thing wronger than the wrong thing righter. If you do the right thing wrong and correct it, you get better." - Russell Ackoff    
    </p>
</blockquote>

Perhaps we should pause, reflect, and reframe our thinking. 

Let's focus on **Effectiveness** instead.

By focusing the team on one thing at a time you are not only baking in the aforementioned quality, but you are reducing if not eliminating the need for rework. They are not constantly distracted by unnecessary multitasking, micromanagement, or juggling priorities. They are focused on **the priority**. Once they are finished, they can move on to the next highest priority. They are not robbed of wasted time. 

Time is a cost that management loves to inquire about. They love to ask for estimates regarding things that are poorly understood. Why? More wasted time. Figure out what is important, what must be done, now. Understand it as a team. Deliver it as a team. Do not waste time estimating the poorly defined, misunderstood, or completely unknown. Do not let the <a href="https://itrevolution.com/articles/the-five-time-thieves" class="link" target="_blank">time thieves</a> creep in. 

Returning again to the original question... It is **more effective (and valuable)** for the team to focus on and deliver the highest priority item - with quality and care - than it is to fracture the team, foster heroics and competition between them, and inevitably manufacture disaster when integrating siloed work through a process of handoffs that is just Waterfall by another name.

**Allow your people to work together as an actual team.**

Create an environment where they can take pride in what they do and discover <a href="https://deming.org/deming-on-management-joy-in-work" class="link" target="_blank">joy in work</a>. 

Think about these points and reassess your thoughts on cost. Specifically in the longer term. <a href="https://www.shiftbase.com/glossary/job-dissatisfaction#:~:text=Poor%20work%20performance,lack%20of%20focus%20on%20quality" class="link" target="_blank">Unhappy people will do lower quality work</a>, are likely to leave the company, and will ultimately end up costing you more than you may have initially realized.
<hr class="border-b-2 border-gray-400 mb-6"/>


### Quality 
It doesn't require additional soapboxing to get this point across. It should be obvious now that if you want quality, you need teamwork.

Happier humans, knowledge dissemination, and a greater sense of team. It goes without saying that actually working together will create a stronger bond between the team members, but it also spreads knowledge and shares the load, allowing for everyone to feel less stressed out about taking a vacation since they know the mob can and will continue on without them. 

Eliminate the standard that has become the silo. Embrace teamwork.

This leads to truly cross-functional teams. 

Testers, Designers, et al, learn more about coding and the developers learn more about Testing, Design, Analysis, and beyond. Everyone learns together and becomes more well versed in other practices, garnering greater empathy and understanding for the work their team members do. This includes the oft forgotten and overlooked Users. You know, the ones who end up frustrated with the team for always delivering something different than what they expected. Those Users. 

Involve them as much as you can. Their perception of the software is the ultimate measure of the quality of it.

</div>