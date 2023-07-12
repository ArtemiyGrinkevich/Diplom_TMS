import { useEffect, useState } from "react";
import { fetchPosts } from "../store/actions/postActions";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import PostCard from "../components/PostCard";
import ReactPaginate from 'react-paginate';
import { Link } from "react-router-dom";
import { PostSearch } from "../components/PostSearch";
import { RotatingLines } from "react-loader-spinner";


const POSTS_PER_PAGE = 10

const Page = () => {
  const dispatch = useAppDispatch();
  const [page, setPage] = useState(0);
  const { error, loading, posts, count } = useAppSelector(state => state.post);
  const pageCount = POSTS_PER_PAGE
 

  const pageChangeHandler = ({ selected }: { selected: number }) => {
    setPage(selected);
  }

  useEffect(() => {
    dispatch(fetchPosts(page + 1, POSTS_PER_PAGE) as any);
  }, [dispatch, page]);

  const displayedPosts = posts.slice(page * POSTS_PER_PAGE, (page + 1) * POSTS_PER_PAGE);

  

  return (
    <div style={{ maxWidth: '560px', margin: '0 auto' }}>
      <Link  className='link' to='https://jsonplaceholder.com/'>
            <span style={{ font: '1.5em "Fira Sans", sans-serif', fontWeight: '700' }}>&#123;JSON&#125;Placeholder</span>
            </Link>
            <hr style={{margin:'1rem',border:'none'}}/>
      <PostSearch />
      {loading && <p style={{ textAlign: 'center' }}>
        <div style={{padding:'2rem'}}>
        <RotatingLines
  strokeColor="grey"
  strokeWidth="5"
  animationDuration="0.75"
  width="96"
  visible={true}
/>
        </div>
        
</p>}
      {error && <p style={{ textAlign: 'center', color: 'red' }}>{error}</p>}
      {displayedPosts.map(post => <PostCard key={post.id} post={post}  />)}
      <hr style={{margin:'1rem',border:'none'}}/>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={pageChangeHandler}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="<"
        containerClassName="containerClass"
        pageClassName="pageClass"
        previousClassName="prevClass"
        nextClassName="nextClass"
        activeClassName="activeClass"
      />
    </div>
  );
};

export default Page;