export default function TextArea(props){

    return(
        <>
            <label  className="block mb-2 text-sm font-medium">{props.lable}</label>
            <textarea onChange={props.handleChange} rows="4" className="block p-2.5 w-full bg-gray-50 rounded-lg border border-gray-200">
            </textarea>
        </>
    )
}