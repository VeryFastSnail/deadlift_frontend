interface TextHolder {
    children?: string | JSX.Element | JSX.Element[],
    subtext?: string | JSX.Element | JSX.Element[],
}

const TextHolder: React.FC<TextHolder> = ({
    children,
    subtext
}) => {
    return (
        <div className="bg-[#272e3f] p-4 text-center w-auto rounded-lg text-white">
            {children}
            <div className="font-bold flex justify-center mt-1">
                {subtext}
            </div>
        </div>
    );
}

export default TextHolder;