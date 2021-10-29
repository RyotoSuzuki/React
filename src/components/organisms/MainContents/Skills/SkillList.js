import SectionTemplate from '../../../templates/SectionTemplate.js';
import SkillCard from './SkillCard.js';
import skills from '../../../../data/skills.json';

function SkillList() {
  return (
    <SectionTemplate letters="Skill">
      {Object.keys(skills).map((key) => {
        const skill = skills[key];
        return (
          <SkillCard
            letters={skill.language}
            pictureSrc={skill.pictureSrc}
            alt={skill.alt}
          />
        );
      })}
    </SectionTemplate>
  );
}
export default SkillList;
