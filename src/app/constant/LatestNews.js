import blog1 from "../assets/blogs/blg1.jpg"
import blog2 from "../assets/blogs/blg2.png"
import blog3 from "../assets/blogs/blg3.webp"

export const newsData = [
  {
    title:
      "AI platform for PotentialMetrics to improve cancer prognastic accuracy.",
    time: "08 Mar 2024 ..Uncategorized",
    image: blog1,
    introduction: `In just seven months, ITRex designed and built a scalable, web-based AI platform paired with proprietary data to aid cancer patients and healthcare providers in making informed treatment decisions. The platform provides insights into the effects of treatment options based on a patient’s age, sex, race/ethnicity, health status, and diagnosis. It consists of three integrated components:`,
    news: [
      `MyInsights, a predictive tool offering visual survival curves and comparing treatment effects, considering various patient-specific factors such as age, gender, comorbility, etc.`,
      `MyCommunity, a supportive social network for patients to share experiences within personalized communities`,
      `MyJournal, a space for patients to document their cancer journey from diagnosis to survivorship, facilitating comparisons with others’ experiences. The platform features an intuitive web questionnaire and versatile report-generation tools, allowing for easy specification of conditions and the ability to download reports as PDFs. From a technical standpoint, our approach encompassed:`,
      `Infrastructure setup and enhancement: Utilizing AWS for a robust foundation and optimizing the client’s MySQL database structure Algorithm integration: Developing a bespoke algorithm for report generation and embedding best DevOps practices for efficient project management
Framework transition: Migrating to the Laravel framework and constructing a solid API for seamless component integration`,
    ],
  },
  {
    title: "How to implement AI in your organization: the definitive guide",
    time: "08 Mar 2024 ..Uncategorized",
    image: blog2,
    introduction: `PwC echoes the sentiment, claiming that AI leaders take a holistic approach to AI development and implementation 
      and tackle three business outcomes — i.e., business transformation, systems modernization, and enhanced decision making — all at once.
So, how to incorporate AI into your business processes and join the cohort of artificial intelligence leaders?
To answer this question, we conducted extensive research, talked to the ITRex experts, and examined the projects from our portfolio. Here’s what we learned.`,
    news: [
      `Disclaimer: Innovation for its own sake won’t do your company any good.

Sometimes simpler technologies like robotic process automation (RPA) can handle tasks on par with AI algorithms, and there’s no need to overcomplicate things.

In other cases (think AI-based medical imaging solutions), there might not be enough data for machine learning models to identify malignant tumors in CT scans with great precision.`,
      `And occasionally, it takes multi-layer neural networks and months of unattended algorithm training to reduce data center cooling costs by 20%.

Artificial intelligence is not some kind of silver-bullet solution that will magically boost your employees’ productivity and improve your bottom line — not even if your company taps into generative AI development services. Yet, the technology has solid potential to transform your organization.`,
      `Companies eyeing AI implementation in business consider various use cases, from mining social data for better customer service to detecting inefficiencies in their supply chains.

On a broader scale, the use of artificial intelligence in business falls to:`,
      `This list is not exhaustive as artificial intelligence continues to evolve, fueled by considerable advances in hardware design and cloud computing.

Algorithms that facilitate or take over standalone tasks and entire processes differ in their data sourcing, processing, and interpretation power — and that’s what you need to keep in mind when working on your AI adoption strategy.`,
      `Let’s take supervised machine learning, for instance. AI engineers could train algorithms to detect 

cats in Instagram posts by feeding them annotated images of our feline friends. When faced with unfamiliar objects, these algorithms fall badly short.

But if we take labeled data out of the ML model training process, we’ll get unsupervised machine learning algorithms that crunch vast amounts of information — again, let’s use cat picks as an example — down to meaningful insights. Unsupervised ML models still require some initial training, though. For instance, we could tell algorithms that a particular database contains images of cats and dogs only and leave it up to the AI to do the math.`,
      `If you’re considering AI implementation in your company, you should also be aware of reinforcement learning. This technique involves letting algorithms loose in the wild so that they can propose solutions to business problems and learn from their own mistakes. This type of AI can help summarize long texts or predict stock market trends.`,
      `Finally, there are deep neural networks that make intelligent predictions by analyzing labeled and unlabeled data against various parameters. Deep learning has found its way into modern natural language processing (NLP) and computer vision (CV) solutions, such as voice assistants and software with facial recognition capabilities.
There’s one more thing you should keep in mind when implementing AI in business.`,
    ],
  },
  {
    title: "PROACTIVE INTELLIGENCE: A PARADIGM SHIFT IN CYBER DEFENSE",
    time: "08 Mar 2024 ..Uncategorized",
    image: blog3,
    introduction: `Understanding attacker infrastructure is the key to not just reactive but true, proactive threat intelligence.
As we’ve seen from several high-profile hacks of recent years, bad actors often break into a network and lie low for months — even years — as they silently steal data and cause damage fully undetected. As part of this, they need to be constantly communicating with their external infrastructure – command-and-control or C2 – for instructions, data exfiltration, and continuation of the attack.`,
    news: [
      `Even though they may try and hide or obfuscate their communication it’s not untraceable. Hackers inevitably leave evidence of their activities which can be used to detect breaches in real-time and allow organizations to proactively address resiliency.
At BlackHat in Las Vegas last year, I kept hearing the buzz phrase “digital exhaust” — the traces left behind like noxious fumes. Since bad actors need to communicate back to their C2, digital exhaust often takes the form of DNS records, which if monitored properly allows organizations to detect anomalous patterns and stop the communications, and thus the breach, before the criminals can do any major harm.`,
      `The evolution of security is becoming less about building higher and bigger walls. It’s more about understanding what’s going on in real time and ensuring that the systems can be resilient against whatever new threat or risk may occur.
That’s even more critical now, as our here-to-stay remote and hybrid work environments dramatically increase an organization’s attack surface. Even if employees’ devices are secure, the people and IoT devices that share the same home network (kids’ phones, printers, smart toasters, you name it) may not be protected.
Protect your home network and benefit from enterprise-grade protections with HYAS Protect At Home – FREE! 
We need to pay attention to where traffic flows and understand what normal versus anomalous communication activities look like before we can respond to the underlying issues.`,
      `That’s where technologies like protective DNS come in.Protective DNS acts as a first line of defense against malware, supply-chain attacks, breaches, and phishing by blocking access to the infrastructure that commands & controls these attacks and is known to host malicious content. It fortifies the overall security of an organization and is a critical part of any comprehensive security stack. That’s why CISA and the NSA now recommend protective DNS as a fundamental element of cybersecurity for every enterprise as part of the Shields Up initiative. And the DoD is making Protective DNS a prerequisite for Maturity Level 3 in its new Cybersecurity Maturity Model Certification (CMMC) standard.`,
      `Cost Efficiency According to IBM’s Cost of a Data Breach Report 2023, the global average cost of a data breach in 2023 was $4.45 million — 15% more than it was in 2020. Cybersecurity Ventures reports that cybercrime is predicted to cost the world over $10 trillion by 2025, and even now is already the world’s third-largest economy after the US and China.`,
      `Proactive measures like protective DNS can help an enterprise achieve a comprehensive and proactive security stance without significant upfront costs. And while attacks can disrupt business operations, driving overall operational and business resiliency by reducing the likelihood of system outages helps maintain business continuity and protects an organization against all forms of digital risk.`,
      `While the fallout from cyberattacks can cost the average organization millions of dollars, the consequences of lost or stolen data (and of reputational damage) can be far worse. Cybercriminals often aim to steal sensitive data like customers’ financial information and intellectual property. If trade secrets are exposed or customers’ trust is shattered, many companies may never recover. In fact, it is estimated that 60% of small businesses that are victims of a cyber attack go out of business within six months. And if an attack affects a whole supply chain, we’ll feel ripples throughout entire industries — perhaps even entire economies.`,
      `Although it’s impossible to prevent cybercrime entirely, we can identify breaches and address them before they can be exploited, making ourselves resilient to attacks.
Malware can spread and propagate within a network, infecting devices and capitalizing on vulnerabilities as it goes. But a proactive approach to cybersecurity can spread, too.
Proactive user education and awareness can prevent employees from inadvertently enabling bad actors or falling prey to phishing scams. But ultimately, and inevitably, bad actors will unfortunately always break in. Nevertheless, early and proactive detection of anomalies means quicker response times to malicious behavior and less likelihood of damage, fewer system outages, less time spent recovering from attacks — and more time for innovation. And isn’t that the ultimate goal of implementing resiliency and having the confidence to drive business full forward?`,
    ],
  },
];
