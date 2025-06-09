
// AI Lifecycle in Health Website (React + Tailwind)
// Full interactive version with ELSI mapping and Layer 2 expansion

import { useState } from 'react';
import { Dialog, DialogTrigger, DialogContent } from '@/components/ui/dialog';

const stages = [
  {
    title: 'Inception',
    color: 'bg-rose-300',
    substages: [
      { title: 'Problem Identification', desc: 'Define and assess the medical problem the model aims to address...', elsi: 'Dataset representation, access to care, bias.' },
      { title: 'Workflows & Feasibility', desc: 'Assess existing workflows...', elsi: 'Time & cost, feasibility, interdisciplinary barriers.' },
      { title: 'Conceptualization', desc: 'Define the model’s objectives...', elsi: 'Lack of clarity, unrealistic goals, systemic bias.' },
    ],
  },
  {
    title: 'Data',
    color: 'bg-red-200',
    substages: [
      { title: 'Data Acquisition', desc: 'Generate and collect quality data...', elsi: 'Representation bias, consent, equity in data sources.' },
      { title: 'Data Preparation and Understanding', desc: 'Evaluate dataset diversity...', elsi: 'Data cleaning risks, de-identification issues.' },
    ],
  },
  {
    title: 'Model',
    color: 'bg-yellow-200',
    substages: [
      { title: 'Select & Define Performance Metrics', desc: 'Select and define model performance...', elsi: 'Fairness, applicability, outcome misalignment.' },
      { title: 'Model Selection', desc: 'Explore and select suitable models...', elsi: 'Bias reinforcement, poor generalization.' },
      { title: 'Design, Development, & Training', desc: 'Iteratively develop and train...', elsi: 'Algorithmic bias, transparency, explainability.' },
      { title: 'Testing & Validation', desc: 'Assess model performance...', elsi: 'Real-world error, patient safety, flagging risks.' },
    ],
  },
  {
    title: 'Deployment',
    color: 'bg-green-200',
    substages: [
      { title: 'Regulatory Approval', desc: 'Ensure compliance and approval...', elsi: 'Lack of regulation, regional disparity.' },
      { title: 'User-training & Education', desc: 'Equip stakeholders...', elsi: 'Responsibility sharing, training quality.' },
      { title: 'Implementation & Integration', desc: 'Deploy operational AI...', elsi: 'Integration gaps, usability, technical feasibility.' },
    ],
  },
  {
    title: 'Management',
    color: 'bg-sky-200',
    substages: [
      { title: 'Monitoring', desc: 'Continuous monitoring...', elsi: 'Alert fatigue, inadequate response time.' },
      { title: 'Maintenance', desc: 'Ongoing model updates...', elsi: 'Performance drift, updating bias, transparency.' },
      { title: 'Decommissioning', desc: 'Model removed from service...', elsi: 'Unclear procedures, outdated standards.' },
    ],
  },
];

export default function AILifecycle() {
  const [activeStage, setActiveStage] = useState(null);

  return (
    <div className="p-8 space-y-6">
      <h1 className="text-3xl font-bold text-center">AI Lifecycle in Health</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {stages.map((stage, i) => (
          <div key={i} className={`rounded-xl p-4 shadow-md ${stage.color}`}>
            <h2 className="text-xl font-semibold text-center">{stage.title}</h2>
            <ul className="mt-2 space-y-2">
              {stage.substages.map((sub, j) => (
                <li key={j}>
                  <Dialog>
                    <DialogTrigger className="underline text-blue-800 hover:text-blue-600">
                      {sub.title}
                    </DialogTrigger>
                    <DialogContent className="max-w-md">
                      <h3 className="text-lg font-bold">{sub.title}</h3>
                      <p className="mt-2 text-sm text-gray-700">{sub.desc}</p>
                      <div className="mt-4">
                        <strong>Ethical, Legal, Social Issues (ELSI):</strong>
                        <p className="text-sm text-rose-700 mt-1">{sub.elsi}</p>
                      </div>
                    </DialogContent>
                  </Dialog>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center text-sm text-gray-500 italic">
        *See, in (), the number of authors citing these ELSI for each stage (to be implemented)
      </div>
    </div>
  );
}
