// Created by Danielle Bagaforo Meer
// Let's Connect : https://www.linkedin.com/in/algorexph/

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Terminal, ArrowRight, Mail, Github, Linkedin } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-zinc-900 to-purple-950">
      

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <p className="text-purple-400">LET'S COLLABORATE</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              VANIE BERMUDEZ,<br />
              Data Scientist / AI Engineer
            </h1>
            <p className="text-gray-400 max-w-xl mx-auto lg:mx-0"> 
            I’m a Data Scientist and AI enthusiast with over seven years of experience working with both multinational and local companies. 
            I’ve consistently delivered high-quality and timely results through operations research, predictive modeling, data analytics, machine learning, automation, and data visualization. 
            I’ve worked extensively with tools like Python, Alteryx, R, Tableau, Power Platforms, and KNIME. 
            Additionally, I excel at fostering strong relationships with internal teams and external stakeholders to provide data-driven solutions that address business challenges.
            </p> 
            <Link href="/projects">
              <Button className="bg-purple-600 hover:bg-purple-700">
                VIEW MY PROJECTS
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="flex justify-center items-center">
            <div className="relative w-72 h-72 sm:w-96 sm:h-96">
              <Image
                src="https://raw.githubusercontent.com/vaniebermudez/ai_first_student_portfolio/refs/heads/main/app/images/Vanie.jpg" // Change to your Photo Please
                alt="Profile"
                fill
                className="rounded-3xl object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">FEATURED PROJECTS</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-zinc-900 border-zinc-800 text-white p-4 sm:p-6">
              <h2 className="text-xl font-bold text-purple-400 mb-4">{project.title}</h2>
              <div className="relative h-40 sm:h-48 mb-6">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2">PROBLEM:</h3>
              <p className="text-gray-400 mb-4 text-sm sm:text-base">{project.problem}</p>
              <h3 className="text-lg font-semibold mb-2">SOLUTION:</h3>
              <p className="text-gray-400 mb-6 text-sm sm:text-base">{project.solution}</p>
                <a href = {project.link} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="w-full bg-purple-600 text-white hover:bg-purple-800 hover:text-white">
                  VIEW PROJECT
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                </a>
            </Card>
          ))}
        </div>
      </section>

      
    </main>
  );
}

// Only your Top 3 Projects

const projects = [
  {
    title: "SmartSell AI: AI for Cross-selling and Upselling",
    image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800&h=600&fit=crop",
    problem: "Identifying effective upselling and cross-selling opportunities can be difficult for businesses, especially when dealing with large datasets. Traditional methods for developing marketing strategies are often time-consuming and lack actionable insights tailored to specific products or customer behaviors.",
    solution: "Develop SmartSell AI, an intelligent tool that allows users to upload a dataset and receive tailored marketing strategies for upselling and cross-selling products. Using advanced machine learning and data analysis techniques, the AI identifies patterns, customer preferences, and product relationships to generate actionable strategies. This solution empowers businesses to enhance revenue, improve customer engagement, and streamline their marketing efforts.",
    link : "https://aifirstbootcamp-smartsellai.streamlit.app/" // Github Link make sure it has https://
  },
  {
    title: "Web Scraping and Insight Generation with Firecrawl and OpenAI Swarm",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop",
    problem: "Extracting and understanding complex information from websites can be time-consuming and inefficient, especially when dealing with unstructured or large volumes of data. Traditional web scraping tools often lack the capability to provide meaningful insights beyond data extraction.",
    solution: "Use Firecrawl to web scrape information from websites and integrate OpenAI Swarm to create multiple AI agents for collaboratively analyzing and understanding the extracted content. These AI agents specialize in tasks such as summarizing key points, identifying patterns, and categorizing information, delivering a comprehensive understanding of the website's content. This approach streamlines data extraction and interpretation, enabling faster and more informed decision-making.",
    link : "https://github.com/vaniebermudez/ai_first_bootcamp/tree/main/Day6" // Github Link make sure it has https://
  },
  {
    title: "SurePath: Your Financial Guide",
    image: "https://images.unsplash.com/photo-1624953187665-7d41d0ade16e?w=800&h=600&fit=crop",
    problem: "Managing personal finances can be complex, with many individuals struggling to find reliable and accessible advice on topics such as budgeting, investments, and savings. Existing resources are often too generic or require significant time and effort to navigate.",
    solution: "Develop a financial advisor chatbot that provides instant, accurate, and personalized answers to a wide range of user financial questions. The chatbot leverages advanced AI and financial expertise to address topics like budgeting, investment strategies, and debt management in an easy-to-understand manner. By offering tailored guidance, the chatbot empowers users to make informed financial decisions efficiently and confidently.",
    link : "https://aifirstbootcamp-surepath-urfinancialguide.streamlit.app/" // Github Link make sure it has https://
  },
  
];