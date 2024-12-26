import { FC } from "react";
import { useField } from "formik";

const TextFiled: FC<{
    inputtype: string
    name: string
    placeholder?: string
    maxLength?: number
    disable?: boolean
}> = (props) => {

    const [field, meta,] = useField(props.name);


    return (
        <>

            <input
                className={"w-full border py-3 px-4 rounded focus:outline-none md:w-96 text-gray-800 " + (props.disable ? " bg-gray-500 border-none " : "") + (meta.error ? " border-red-500 " : (field.value ? " border-green-500 " : " border-gray-400"))}
                placeholder={props.placeholder}
                maxLength={props.maxLength}
                type={props.inputtype}
                disabled={props.disable}
                {...field}
            />
            <div className="flex">
                {meta.error && meta.touched &&
                    <div className="flex items-center gap-1 mt-2 md:mt-0">
                        <span className="text-sm text-red-500">
                            {meta.error}
                        </span>
                    </div>
                }
            </div>

        </>
    )
}

export default TextFiled