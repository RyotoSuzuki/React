import SectionHeader from '../atoms/Header.js';

function SectionTemplate(props) {
  const letters = props.letters;
  return (
    <div>
      <SectionHeader letters={letters} />
      {props.children}
    </div>
  );
}

export default SectionTemplate;
