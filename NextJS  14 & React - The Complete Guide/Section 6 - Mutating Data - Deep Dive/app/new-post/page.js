import createPost from '@/actions/form-actions';
import PostForm from '@/components/post-form';

export default function NewPostPage() {
  return <PostForm action={createPost} />;
}