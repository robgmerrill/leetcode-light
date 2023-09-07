import Topbar from "@/components/Topbar/Topbar";
import Workspace from "@/components/Workspace/Workspace";
import useHasMounted from "@/hooks/useHasMounted";
import { problems } from "@/utils/problems";
import { Problem } from "@/utils/problems/types/problem";

type ProblemPageProps = {
	// problem: Problem;
	problem: Problem
};

const ProblemPage: React.FC<ProblemPageProps> = ({problem}) => {
	const hasMounted = useHasMounted();

  if (!hasMounted) return null;
	console.log(problem)
	return (
		<div>
            <Topbar problemPage={true} />
			<Workspace problem={problem}/>
		</div>
	);
};
export default ProblemPage;

// Fetch the local data 
// SSG - static site generation - pages will be pregenerated on the server
// getStaticPaths - creates the dynamic routes - these are pregenerated on server

export async function getStaticPaths() {
	const paths = Object.keys(problems).map((key) => ({
		params: { pid: key },
	}));

	return {
		paths,
		fallback: false,
	};
}

// getStaticProps - fetches the data
export async function getStaticProps({ params }: { params: { pid: string } }) {
	const { pid } = params;
	const problem = problems[pid];

	if (!problem) {
		return {
			notFound: true,
		};
	}
	problem.handlerFunction = problem.handlerFunction.toString();
	return {
		props: {
			problem,
		},
	};
}