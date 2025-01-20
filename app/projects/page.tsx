// Created by Danielle Bagaforo Meer
// Let's Connect : https://www.linkedin.com/in/algorexph/
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Terminal } from 'lucide-react';

// Add your Projects Here
const projects = [
  {
    title: "Finetuning LLM and Inferencing",
    image: "https://plus.unsplash.com/premium_photo-1661779386497-1f7b9ec4d8f3?w=800&h=600&fit=crop",
    problem: "Skin-related issues are prevalent, yet providing accurate and accessible dermatological advice remains challenging due to the specialized knowledge required. Current conversational AI models lack fine-tuning for domain-specific queries, limiting their effectiveness in addressing diverse dermatological concerns.",
    solution: "Fine-tune the GEMMA2B model using a carefully curated dermatology-focused Q&A dataset to enhance its ability to generate accurate and empathetic responses. The dataset will include diverse questions, medical terminology, and layman's language to ensure accessibility. By adapting GEMMA2B to this specialized domain, the solution aims to deliver a conversational AI capable of providing reliable dermatological advice while adhering to ethical and medical standards.",
    tools: ["Python", "GEMMA2B", "Hugging Face", "CUDA"],
    link : "https://github.com/vaniebermudez/ai_first_bootcamp/tree/main/Day2" // Github Link make sure it has https://
  },
  {
    title: "AI News Summarizer",
    image: "https://images.unsplash.com/photo-1495020689067-958852a7765e?w=800&h=600&fit=crop",
    problem: "People often struggle to keep up with the vast amount of news available daily, as reading entire articles can be time-consuming. Current tools for summarizing news articles often lack accuracy or fail to capture key points in a user-friendly manner.",
    solution: "Develop an AI-powered news summarizer that allows users to input a news article and receive a concise, accurate summary. The summarizer leverages advanced natural language processing techniques to extract and present the key points of the article while maintaining the context and tone. This tool saves time for users, ensuring they stay informed without needing to read lengthy articles.",
    tools: ["Python", "Streamlit", "OpenAI", "LangChain"],
    link : "https://aifirstbootcamp-van-news-summarizer.streamlit.app/" // Github Link make sure it has https://
  },
  {
    title: "SurePath: Your Financial Guide",
    image: "https://images.unsplash.com/photo-1624953187665-7d41d0ade16e?w=800&h=600&fit=crop",
    problem: "Managing personal finances can be complex, with many individuals struggling to find reliable and accessible advice on topics such as budgeting, investments, and savings. Existing resources are often too generic or require significant time and effort to navigate.",
    solution: "Develop a financial advisor chatbot that provides instant, accurate, and personalized answers to a wide range of user financial questions. The chatbot leverages advanced AI and financial expertise to address topics like budgeting, investment strategies, and debt management in an easy-to-understand manner. By offering tailored guidance, the chatbot empowers users to make informed financial decisions efficiently and confidently.",
    tools: ["Python", "Streamlit", "OpenAI", "LangChain"],
    link : "https://aifirstbootcamp-surepath-urfinancialguide.streamlit.app/" // Github Link make sure it has https://
  },
  {
    title: "InvyTrack: AI Inventory Tracker",
    image: "https://images.unsplash.com/photo-1664382953403-fc1ac77073a0?w=800&h=600&fit=crop",
    problem: "Managing inventory effectively is critical for businesses but can be challenging due to the need for quick, accurate insights into stock levels, trends, and potential shortages. Traditional inventory systems often lack real-time querying capabilities and user-friendly interfaces for data analysis.",
    solution: "Develop an AI-powered inventory tracker that allows users to ask questions about inventory and receive instant, accurate responses based on a provided dataset. Using advanced AI algorithms, the tracker interprets user queries, analyzes inventory data, and delivers actionable insights, such as stock levels, reorder alerts, and sales trends. This solution enhances inventory management by saving time, reducing errors, and improving decision-making efficiency.",
    tools: ["Python", "Streamlit", "OpenAI", "LangChain", "RAG"],
    link : "https://aifirstbootcamp-invytrack-try.streamlit.app/" // Github Link make sure it has https://
  },
  {
    title: "SmartSell AI: AI for Cross-selling and Upselling",
    image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800&h=600&fit=crop",
    problem: "Identifying effective upselling and cross-selling opportunities can be difficult for businesses, especially when dealing with large datasets. Traditional methods for developing marketing strategies are often time-consuming and lack actionable insights tailored to specific products or customer behaviors.",
    solution: "Develop SmartSell AI, an intelligent tool that allows users to upload a dataset and receive tailored marketing strategies for upselling and cross-selling products. Using advanced machine learning and data analysis techniques, the AI identifies patterns, customer preferences, and product relationships to generate actionable strategies. This solution empowers businesses to enhance revenue, improve customer engagement, and streamline their marketing efforts.",
    tools: ["Python", "Streamlit", "OpenAI", "LangChain", "RAG"],
    link : "https://aifirstbootcamp-smartsellai.streamlit.app/" // Github Link make sure it has https://
  },
  {
    title: "Web Scraping and Insight Generation with Firecrawl and OpenAI Swarm",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop",
    problem: "Extracting and understanding complex information from websites can be time-consuming and inefficient, especially when dealing with unstructured or large volumes of data. Traditional web scraping tools often lack the capability to provide meaningful insights beyond data extraction.",
    solution: "Use Firecrawl to web scrape information from websites and integrate OpenAI Swarm to create multiple AI agents for collaboratively analyzing and understanding the extracted content. These AI agents specialize in tasks such as summarizing key points, identifying patterns, and categorizing information, delivering a comprehensive understanding of the website's content. This approach streamlines data extraction and interpretation, enabling faster and more informed decision-making.",
    tools: ["Python", "OpenAI", "LangChain", "Swarm", "Firecrawl"],
    link : "https://github.com/vaniebermudez/ai_first_bootcamp/tree/main/Day6" // Github Link make sure it has https://
  },
  {
    title: "Agentic AI Business Canvas",
    image: "https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?w=800&h=600&fit=crop",
    problem: "Many businesses rely on generic AI models, like ChatGPT, for creating solutions, but these models may not be fully customized or optimized for specific industry needs. This can lead to inefficiencies and missed opportunities for innovation within business operations and strategy development.",
    solution: "Conceptualize an Agentic AI Business Canvas that allows businesses to build tailored AI solutions that align with their specific goals, workflows, and industries. Specifically, the topics are on Insurance policy renewals, Order management, and Custom report generation.",
    tools: ["Agentic AI Business Canvas"],
    link : "https://github.com/vaniebermudez/ai_first_bootcamp/blob/dfd63ba7c44c7d61c03bc4a8b91bdb1794e51227/Day7/Agentic%20AI%20Business%20Canvas.xlsx" // Github Link make sure it has https://
  },
  {
    title: "Hackathon: Student Mentoring for AI Republic",
    image: "https://images.unsplash.com/photo-1561346745-5db62ae43861?w=800&h=600&fit=crop",
    problem: "Students often face challenges in generating project ideas, understanding which Python libraries to use, and breaking down complex code for their AI-related studies. There is a lack of easily accessible, personalized support for guiding students through these tasks, which can hinder their learning and project development.",
    solution: "During AI First Bootcamp Hackathon, we developed an AI-driven student support system that generates personalized AI project ideas, suggests the most commonly used Python libraries based on student needs, and provides detailed code breakdowns upon request. This AI system is designed to assist students by offering tailored guidance, explanations, and resources, helping them to navigate their learning more effectively and improve their skills in AI development.",
    tools: ["Python", "Streamlit", "OpenAI", "LangChain", "RAG"],
    link : "https://github.com/vaniebermudez/ai_first_bootcamp/tree/main/Day8" // Github Link make sure it has https://
  },
  
];

// Created by Danielle Bagaforo Meer
// Let's Connect : https://www.linkedin.com/in/algorexph/
export default function Projects() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-zinc-900 to-purple-950">

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">ALL PROJECTS</h1>
        <p className="text-gray-400 mb-8 sm:mb-12">Exploring the intersection of AI and real-world solutions</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-lg overflow-hidden hover:border-purple-500/40 transition-all duration-300">
              <div className="relative h-48 sm:h-56">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover opacity-60 saturate-50"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90" />
              </div>
              
              <div className="p-4 sm:p-6 space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-purple-400 tracking-tight">{project.title}</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-purple-400 text-sm font-semibold uppercase tracking-wider mb-2">PROBLEM:</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{project.problem}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-purple-400 text-sm font-semibold uppercase tracking-wider mb-2">SOLUTION:</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{project.solution}</p>
                  </div>
                </div>
                
                <div className="pt-4 space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, toolIndex) => (
                      <span
                        key={toolIndex}
                        className="text-xs px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                  <a href = {project.link} target="_blank" rel="noopener noreferrer">
                  <Button
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium tracking-wide"
                  >
                    VIEW PROJECT
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

