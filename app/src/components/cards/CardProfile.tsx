import bg from '../../assets/images/backgrounds/background.jpeg';
const CardProfile = () => {
  return (
    <div>
      <div className='w-[350px] border border-1 rounded-[20px]'>
        <div>
          <img src={bg} className='rounded-[20px]' />
        </div>
        <div className='w-full'>
          <div>Name</div>
        </div>
      </div>
    </div>
  );
};

export default CardProfile;
