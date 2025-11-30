import Image from 'next/image';
import {
  StyledTackStack,
  ExperienceHeader,
  Line,
  HeaderText,
  TechStackContainer,
  TechStackItem,
  TechStackImage,
  TechStackInfo,
  TechStackName,
  TechStackCategory,
} from './TackStack.styled';
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
      <ExperienceHeader>
        <Line />
        <HeaderText>Tech Stack</HeaderText>
        <Line />
      </ExperienceHeader>
      <TechStackContainer>
        {techStackData.map((tech: TechStack) => (
          <TechStackItem key={tech.id}>
            <TechStackImage>
              <Image src={tech.logo} alt={`${tech.name} logo`} width={64} height={64} />
            </TechStackImage>
            <TechStackInfo>
              <TechStackName>{tech.name}</TechStackName>
              <TechStackCategory>{tech.category}</TechStackCategory>
            </TechStackInfo>
          </TechStackItem>
        ))}
      </TechStackContainer>
    </StyledTackStack>
  );
}

export default TackStack;
