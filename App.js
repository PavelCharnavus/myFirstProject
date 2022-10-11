import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";


const App = (props) => {


    return (

        <div className='app-wrapper'>
            <Header/>
            <Navbar/>

            <div className='app-wrapper-content'>
                <Routes>

                    {/*<Route path="/dialogs" element={<Dialogs/>}/>
                        <Route path="/profile" element={<Profile/>}/>*/}

                    {/* В react route dom версии 6 функция render передается таким образом -
                        <Route path={urls.courses} element={<CoursesList otherProp={myProp} />} /> */}

                    {/* <Route path="/dialogs" element={<Dialogs dialogs={props.state.dialogsPage.dialogs}
                                                                 messages={props.state.dialogsPage.messages}/>}/>
                        <Route path="/profile" element={<Profile posts={props.state.profilePage.posts}/>}/>*/}

                    <Route path="/dialogs" element={<Dialogs store = {props.store} />}/>

                    <Route path="/profile" element={<Profile dispatch={props.dispatch}
                                    profilePage={props.state.profilePage}/>}/>
                </Routes>
            </div>
        </div>

    )


}
export default App;

