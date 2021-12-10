import React from "react";
import { useHistory } from "react-router-dom";
import { postCreateTrip } from "../components/api_list";
import { useProtectedPage } from "../hooks/ProtectedPage";
import useForm from "../hooks/useForm";



const CreateTripPage = () => {
    useProtectedPage();
    
    const history = useHistory();
    const { form, onChange, clear } = useForm({ name: "", planet: "", date: "", description: "", durationInDays: "" })


    const goToAdminHomePage = (history) => {
        history.push("/admin/trips/list")
    }

    const onClickCreate = (e) => {
        e.preventDefault()
        postCreateTrip(form, clear)
    }

    return (
        <div>
            <form onSubmit={onClickCreate}>
                <input
                    placeholder={"Nome"}
                    name={"name"}
                    value={form.name}
                    onChange={onChange}
                />
                <select
                    placeholder={"Planeta"}
                    name={"planet"}
                    defaultValue={""}
                    onChange={onChange}
                >
                <option value={""} disabled>Escolha um Planeta</option>
                </select>
                <input
                    placeholder={"Data"}
                    type={"date"}
                    name={"date"}
                    value={form.date}
                    onChange={onChange}
                />
                <input
                    placeholder={"Descrição"}
                    name={"description"}
                    value={form.description}
                    onChange={onChange}
                />
                <input
                    placeholder={"Duração em dias"}
                    type={"number"}
                    name={"durationInDays"}
                    value={form.durationInDays}
                    onChange={onChange}
                />
            <button onClick={() => goToAdminHomePage(history)}>Voltar</button>
            <button type={"submit"} onClick={onClickCreate}>Criar</button>
            </form>
        </div>
    );
}

export default CreateTripPage;