import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Form from "./components/Form";
import LayoutIndex from "./layouts/LayoutIndex";
import Register from "./pages/Register";
import Login from "./pages/Login";
import UpdateForm from "./components/UpdateForm";
import LayoutAuth from "./layouts/LayoutAuth";

export default function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="" element={<LayoutIndex />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/create" element={<Form />} />
                        <Route path="/workout/:id" element={<UpdateForm />} />
                        <Route path="*" element={<NotFound />} />
                    </Route>
                    <Route path="" element={<LayoutAuth />}>
                        <Route path="/register" element={<Register />} />
                        <Route path="/login" element={<Login />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}
