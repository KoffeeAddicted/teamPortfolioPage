const TypographySkill = ({
  ulItems,
  linkingText,
}: {
  ulItems: Array<{ style: string; content: string }>;
  linkingText: string;
}) => {
  return (
    <div className='flex justify-center gap-4'>
      <div className='scrolling-words-box'>
        <ul>
          {ulItems?.map((item) => (
            <li key={item.style} className={item.style}>
              {item.content}
            </li>
          ))}
        </ul>
      </div>
      <span>{linkingText}</span>
    </div>
  );
};

export default TypographySkill;
