export const dynamic = 'force-dynamic';

type AdminPostPageProps = {
  params: Promise<{ id: string }>;
};

export default async function AdminPostIdPage({ params }: AdminPostPageProps) {
  const { id } = await params;
  return (
    <div className='py-16 text-9xl bg-amber-700 border-4 border-black'>
      AdminPostIdPage: {id}
    </div>
  );
}
