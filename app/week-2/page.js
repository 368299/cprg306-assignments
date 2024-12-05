import StudentInfo from './student-info';

export default function Page() {
  return (
    <main>
      <h1>Shopping List</h1>
      <StudentInfo />
    </main>
  );
}


  import Link from 'next/link';

  export default function Home() {
    return (
      <main>
        <h1>CPRG 306: Web Development 2 - Assignments</h1>
        <ul>
          <li>
            <Link href="/week-2">Week 2 Assignment</Link>
          </li>
        </ul>
      </main>
    );
  }
  