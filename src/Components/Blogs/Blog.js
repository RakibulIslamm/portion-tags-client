import React from 'react';

const Blogs = () => {
    return (
        <div className='min-h-screen'>
            <div className='px-[80px] xs:px-4 sm:px-10 my-10 grid grid-cols-2 xs:grid-cols-1 gap-8'>
                <div className='shadow-xl p-8 border'>
                    <h2 className='text-2xl font-semibold pb-2'>Q: How will you improve the performance of a React Application?</h2>
                    <p> <b>Answer:</b>There are many way to optimize a react application, among them some of below : Usage of Pure components, Use React.Fragment to Avoid Adding Extra Nodes to the DOM, Use React.Suspense and React.Lazy for Lazy Loading Components, Use React.memo for Component Memoization, Virtualize a Large List Using react-window</p>
                </div>

                <div className='shadow-xl p-8 border'>
                    <h2 className='text-2xl font-semibold pb-2'>Q: What are the different ways to manage a state in a React application?</h2>
                    <p> <b>Answer:</b> In React apps, there are some ways to handle the state.
                        URL: We can use URL to store some data <br />
                        Web Storage: This is useful when we want to persist state between reloads and reboots <br />
                        Local State: The third option is to use store state locally. It is useful when one component needs the state. <br />
                        Lifted State: This state is used across multiple components. In those cases, it is useful to lift the state to a common parent. The lifting state is a two‑step process <br />
                        Derived State: This state is for compute the new state based on the available state and we do not need to declare a state at all. <br />

                    </p>
                </div>

                <div className='shadow-xl p-8 border'>
                    <h2 className='text-2xl font-semibold pb-2'>Q: How does prototypical inheritance work?</h2>
                    <p> <b>Answer:</b> Prototypal Inheritance is that an object can point to another object and inherit all its properties. The main purpose is to allow multiple instances of an object to share common properties, hence, the Singleton Pattern.</p>
                </div>

                <div className='shadow-xl p-8 border'>
                    <h2 className='text-2xl font-semibold pb-2'>Q: Why you do not set the state directly in React.</h2>
                    <p> <b>Answer:</b> Because react state is immutable. Immutables are the objects whose state cannot be changed once the object is created. An immutable value is the exact opposite – after it has been created, it can never change. If we want to change react state, we must set the value in on that state function</p>
                </div>

                <div className='shadow-xl p-8 border'>
                    <h2 className='text-2xl font-semibold pb-2'>Q: What is a unit test? Why should write unit tests?</h2>
                    <p> <b>Answer:</b> Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation. This testing methodology is done during the development process by the software developers and sometimes QA staff.  The main objective of unit testing is to isolate written code to test and determine if it works as intended.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;