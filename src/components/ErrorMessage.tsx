//error alert for UI
export const ErrorMessage = ({ message }: { message: string }) => (
    <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 my-4" role="alert">
        <p className="font-bold"></p>
        <p>{message}</p>
    </div>
);