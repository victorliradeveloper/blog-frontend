import Image from 'next/image';
import StyledTackStack from './TackStack.styled';
import techStackData from '@/data/tech-stack.json';

interface TechStack {
  id: number;
  name: string;
  category: string;
  logo: string;
  description: string;
}

function TackStack() {
  return (
    <StyledTackStack>
      <div className="experience-header">
        <div className="line-left"></div>
        <p>Tech Stack</p>
        <div className="line-right"></div>
      </div>
      <div className="tech-stack-container">
        {techStackData.map((tech: TechStack) => (
          <div key={tech.id} className="tech-stack-item">
            <Image src={tech.logo} alt={`${tech.name} logo`} width={64} height={64} />
            <div>
              <p>{tech.name}</p>
              <p>{tech.category}</p>
            </div>
          </div>
        ))}
      </div>
    </StyledTackStack>
  );
}

export default TackStack;
