import { useState } from 'react';
import * as XLSX from "xlsx";
import UploadedFilesSection from './UploadedFilesSection';

function AdminDash() {

    const [sheets, setSheets] = useState([]);
    const [data, setData] = useState([]);
    const [workbook, setWorkbook] = useState(null);

    const handleFileUpload = (e) => {

        const file = e.target.files[0];
        if (!file) {
            return; // If no file is selected, exit the function
        }

        const reader = new FileReader();
        reader.readAsBinaryString(e.target.files[0]);
        reader.onload = (e) => {
            const data = e.target.result;
            const workbook = XLSX.read(data, { type: "binary" });
            const sheetNames = workbook.SheetNames;
            setSheets(sheetNames);
            setWorkbook(workbook);  // Store the workbook in state
            loadSheetData(workbook, sheetNames[0]); // Set the first sheet as the default
        };
    };

    const loadSheetData = (workbook, sheetName) => {
        const sheet = workbook.Sheets[sheetName];
        const parsedData = XLSX.utils.sheet_to_json(sheet);
        setData(parsedData);
    };

    const handleSheetChange = (sheetName) => {
        loadSheetData(workbook, sheetName);  // Use the stored workbook
    };

    return (
        <div className="bg-blue-50 min-h-screen p-8">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">

                <h1 className="text-3xl sm:text-4xl lg:text-6xl 
                text-center mt-5 font-bold ">Welcome User!</h1>

                <p className="text-sm sm:text-1xl text-slate-800  
                text-center mt-6 tracking-wide ">Please choose your .xlxs / .xls file to be uploaded</p>
                <br />
                <input 
                    type="file" 
                    accept=".xlsx, .xls" 
                    onChange={handleFileUpload} 
                    className="mb-4 w-full text-blue-500 bg-blue-100 border border-blue-500 rounded py-2 px-4 cursor-pointer"
                />
                {sheets.length > 0 && (
                    <div className="flex justify-around my-4">
                        {sheets.map((sheet, index) => (
                            <button 
                                key={index} 
                                onClick={() => handleSheetChange(sheet)}
                                className="bg-blue-500 text-white py-2 px-4 rounded 
                                transition duration-200 ease-in-out hover:bg-black 
                                hover:text-white border border-blue-500"
                            >
                                {sheet}
                            </button>
                        ))}
                    </div>
                )}
                {data.length > 0 && (
                    <div className="overflow-x-auto">
                        <table className='table-auto w-full text-center bg-white border-collapse border border-blue-200'>
                            <thead className="bg-blue-500 text-white">
                                <tr>
                                    {Object.keys(data[0]).map((key) => (
                                        <th key={key} className="border border-blue-200 py-2 px-4">
                                            {key}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((row, index) => (
                                    <tr key={index} className="odd:bg-blue-100 even:bg-blue-50">
                                        {Object.values(row).map((value, index) => (
                                            <td key={index} className="border border-blue-200 py-2 px-4">
                                                {value}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
                <div className="flex justify-end mt-6">
                    <button 
                        className="bg-blue-500 text-white py-2 px-6 rounded 
                        transition duration-200 ease-in-out hover:bg-black 
                        hover:text-white border border-blue-500"
                    >
                        Submit
                    </button>
                </div>
            </div>
            <UploadedFilesSection />
        </div>
    );
}

export default AdminDash;
