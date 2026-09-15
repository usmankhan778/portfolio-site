import { Project } from '@/components/project-card'

export const projects: Project[] = [
  {
    id: 'sales-data-dashboard',
    title: 'Sales Data Analysis & Power BI Dashboard',
    description: 'Analyzed sales data to identify trends, top-performing products, regions, and key business KPIs. Created an interactive Power BI dashboard with charts, graphs, and KPI indicators for business decision-making.',
    technologies: ['Power BI', 'DAX', 'Excel', 'Data Cleaning', 'Data Analysis'],
    metrics: ['Interactive KPI Dashboard', 'Sales & Revenue Analysis', 'Regional Performance Tracking'],
    githubUrl: 'https://github.com/usmankhan778',
  },
  {
    id: 'python-data-analysis',
    title: 'Data Analysis with Python',
    description: 'Performed exploratory data analysis using Python to clean, transform, and analyze datasets. Used statistical analysis and visualizations to identify patterns, trends, and relationships in the data.',
    technologies: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Jupyter Notebook'],
    metrics: ['Dataset Cleaning & Preparation', 'Statistical Analysis', 'Pattern & Trend Identification'],
    githubUrl: 'https://github.com/usmankhan778',
  },
  {
    id: 'sql-data-analysis',
    title: 'SQL Data Analysis',
    description: 'Used SQL to query and analyze structured datasets, answering business questions through filtering, aggregation, grouping, joins, and subqueries to extract meaningful insights.',
    technologies: ['SQL', 'MySQL', 'Database Management'],
    metrics: ['Complex Query Development', 'Data Extraction & Insights', 'Business Question Resolution'],
    githubUrl: 'https://github.com/usmankhan778',
  },
]

export const skills = [
  'Data Analysis',
  'SQL',
  'Python',
  'Power BI',
  'Data Visualization',
  'Statistical Analysis',
  'Data Cleaning',
  'Excel',
]
