// /**
//  * v0 by Vercel.
//  * @see https://v0.dev/t/UtuSGbspTfG
//  */
// import Link from "next/link";
// import { Avatar } from "@/components/ui/avatar";
// import { Badge } from "@/components/ui/badge";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";

// export default function Component() {
//   return (
//     <Card className="space-y-8 p-8">
//       <CardHeader>
//         <div className="flex items-center space-x-4">
//           <Avatar
//             alt="Profile Picture"
//             size="lg"
//             src="/placeholder.svg?height=100&width=100"
//           />
//           <div>
//             <CardTitle className="text-2xl">John Doe</CardTitle>
//             <CardDescription className="text-sm text-gray-500 dark:text-gray-400">
//               Full Stack Developer
//             </CardDescription>
//           </div>
//         </div>
//       </CardHeader>
//       <CardContent>
//         <div className="flex flex-col space-y-4">
//           <div>
//             <h2 className="text-lg font-semibold">About Me</h2>
//             <p className="text-sm">
//               A passionate Full Stack Developer with experience in developing
//               web applications using JavaScript and Python.
//             </p>
//           </div>
//           <div>
//             <h2 className="text-lg font-semibold">Skills</h2>
//             <div className="space-y-2">
//               <div>
//                 <h3 className="text-base font-medium">Human Languages</h3>
//                 <div className="flex flex-wrap gap-2">
//                   <Badge>English</Badge>
//                   <Badge>Spanish</Badge>
//                 </div>
//               </div>
//               <div>
//                 <h3 className="text-base font-medium">Programming Languages</h3>
//                 <div className="flex flex-wrap gap-2">
//                   <Badge>JavaScript</Badge>
//                   <Badge>Python</Badge>
//                 </div>
//               </div>
//               <div>
//                 <h3 className="text-base font-medium">Front-End</h3>
//                 <div className="flex flex-wrap gap-2">
//                   <Badge>React</Badge>
//                   <Badge>HTML</Badge>
//                   <Badge>CSS</Badge>
//                 </div>
//               </div>
//               <div>
//                 <h3 className="text-base font-medium">Back-End</h3>
//                 <div className="flex flex-wrap gap-2">
//                   <Badge>Django</Badge>
//                   <Badge>Node.js</Badge>
//                 </div>
//               </div>
//               <div>
//                 <h3 className="text-base font-medium">Dev-Ops</h3>
//                 <div className="flex flex-wrap gap-2">
//                   <Badge>Docker</Badge>
//                   <Badge>Kubernetes</Badge>
//                 </div>
//               </div>
//               <div>
//                 <h3 className="text-base font-medium">Databases</h3>
//                 <div className="flex flex-wrap gap-2">
//                   <Badge>SQL</Badge>
//                   <Badge>MongoDB</Badge>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div>
//             <h2 className="text-lg font-semibold">Certifications</h2>
//             <div className="space-y-2">
//               <div>
//                 <h3 className="text-base font-medium">
//                   Certified Python Developer
//                 </h3>
//                 <p className="text-sm">Certified by Python Institute</p>
//               </div>
//               <div>
//                 <h3 className="text-base font-medium">
//                   Certified JavaScript Developer
//                 </h3>
//                 <p className="text-sm">Certified by JavaScript Institute</p>
//               </div>
//               <div>
//                 <h3 className="text-base font-medium">
//                   Certified React Developer
//                 </h3>
//                 <p className="text-sm">Certified by React Training</p>
//               </div>
//             </div>
//           </div>
//           <div>
//             <h2 className="text-lg font-semibold">Experience</h2>
//             <div className="space-y-2">
//               <div>
//                 <h3 className="text-base font-medium">
//                   Software Developer, Company A
//                 </h3>
//                 <p className="text-sm">
//                   Developed end-to-end features for a B2B application using
//                   React and Django.
//                 </p>
//               </div>
//               <div>
//                 <h3 className="text-base font-medium">
//                   Web Developer, Company B
//                 </h3>
//                 <p className="text-sm">
//                   Worked in a team to build an e-commerce platform using
//                   JavaScript and Python.
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div>
//             <h2 className="text-lg font-semibold">Projects</h2>
//             <div className="space-y-2">
//               <div>
//                 <h3 className="text-base font-medium">Project A</h3>
//                 <p className="text-sm">
//                   A web application for managing tasks. Built with React and
//                   Django.
//                 </p>
//                 <Link
//                   className="text-sm text-blue-500 hover:underline"
//                   href="#"
//                 >
//                   View on GitHub
//                 </Link>
//               </div>
//               <div>
//                 <h3 className="text-base font-medium">Project B</h3>
//                 <p className="text-sm">
//                   An e-commerce platform built with JavaScript and Python.
//                 </p>
//                 <Link
//                   className="text-sm text-blue-500 hover:underline"
//                   href="#"
//                 >
//                   View on GitHub
//                 </Link>
//               </div>
//             </div>
//           </div>
//           <div>
//             <h2 className="text-lg font-semibold">Recommendation</h2>
//             <div className="flex items-start space-x-4">
//               <Avatar
//                 alt="Mentor Picture"
//                 size="sm"
//                 src="/placeholder.svg?height=50&width=50"
//               />
//               <div>
//                 <h3 className="text-base font-medium">
//                   Jane Smith, Senior Developer at Company A
//                 </h3>
//                 <p className="text-sm">
//                   John is a dedicated developer with a keen eye for detail. He
//                   consistently delivered high-quality code and was a vital
//                   member of our team.
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div>
//             <h2 className="text-lg font-semibold">Contacts</h2>
//             <div className="space-y-2">
//               <div className="flex items-center space-x-2">
//                 <IconMail className="h-5 w-5 text-gray-500 dark:text-gray-400" />
//                 <p className="text-sm">johndoe@mail.com</p>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <IconTelegram className="h-5 w-5 text-gray-500 dark:text-gray-400" />
//                 <p className="text-sm">@johndoe</p>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <IconGithub className="h-5 w-5 text-gray-500 dark:text-gray-400" />
//                 <Link
//                   className="text-sm text-blue-500 hover:underline"
//                   href="#"
//                 >
//                   JohnDoe
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </CardContent>
//     </Card>
//   );
// }

// function IconGithub(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       stroke-width="2"
//       stroke-linecap="round"
//       stroke-linejoin="round"
//     >
//       <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
//       <path d="M9 18c-4.51 2-5-2-7-2" />
//     </svg>
//   );
// }

// function IconMail(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       stroke-width="2"
//       stroke-linecap="round"
//       stroke-linejoin="round"
//     >
//       <rect width="20" height="16" x="2" y="4" rx="2" />
//       <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
//     </svg>
//   );
// }

// function IconTelegram(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       stroke-width="2"
//       stroke-linecap="round"
//       stroke-linejoin="round"
//     >
//       <path d="M2 20h.01" />
//       <path d="M7 20v-4" />
//       <path d="M12 20v-8" />
//       <path d="M17 20V8" />
//       <path d="M22 4v16" />
//     </svg>
//   );
// }
