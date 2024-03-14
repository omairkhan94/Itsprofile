// 'use client'
 
// import { usePathname } from 'next/navigation'
// import Link from 'next/link'
 
// export function Links() {
//   const pathname = usePathname()
 
//   return (
//     <nav>
//       <ul>
//         <li>
//           <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">
//             Home
//           </Link>
//         </li>
//         <li>
//           <Link
//             className={`link ${pathname === '/about' ? 'active' : ''}`}
//             href="/about"
//           >
//             About
//           </Link>
//         </li>

//         <li>
//           <Link className={`form ${pathname === '/' ? 'active' : ''}`} href="/form">
//             Form
//           </Link>
//         </li>
//       </ul>
//     </nav>
//   )
// }