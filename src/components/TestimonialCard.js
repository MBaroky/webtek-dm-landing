export default function TestimonialCard({
  imageSrc,
  testimonial,
  authorImageSrc,
  authorName,
  authorTitle,
  className,
}) {
  return (
    <div className={`flex flex-col mb-5 ${className}`}>
      <img
        loading='lazy'
        src={imageSrc}
        alt=''
        className='max-w-full aspect-[2.63] w-[140px]'
      />
      <p className='mt-4 text-sm text-white'>{testimonial}</p>
      <div className='flex gap-2.5 mt-4 text-white'>
        <img
          loading='lazy'
          src={authorImageSrc}
          alt=''
          className='shrink-0 rounded-full aspect-square w-[57px] object-cover object-top'
        />
        <div className='flex flex-col py-0.5 my-auto'>
          <cite className='text-base italic font-bold'>
            {authorName}
          </cite>
          <div className='text-sm italic font-light'>
            {authorTitle}
          </div>
        </div>
      </div>
    </div>
  );
}
