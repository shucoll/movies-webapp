import SectionRow from '../../SectionRow/SectionRow';
import Banner from '../../Banner/Banner';
import requestUrls from '../../../helpers/request-urls';

const Homepage = (props) => {
  const sectionRowContent = [
    { title: 'Trending', url: requestUrls.trendingMovies, isLarge: true },
    { title: 'Top Rated Movies', url: requestUrls.topRatedMovies },
    { title: 'Comedy', url: requestUrls.comedyMovies },
    { title: 'Horror', url: requestUrls.horrorMovies },
    { title: 'Thriller', url: requestUrls.thrillerMovies },
    { title: 'Animated', url: requestUrls.animatedMovies },
  ];

  return (
    <div>
      <Banner url={requestUrls.trendingMovies} />
      {sectionRowContent.map((item, index) => (
        <SectionRow
          title={item.title}
          url={item.url}
          isLarge={item.isLarge}
          key={index}
        />
      ))}
    </div>
  );
};

export default Homepage;
