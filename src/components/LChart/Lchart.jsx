import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
const Lchart = () => {
    const subjectMarks = [
        { "id": 1, "name": "Arif ", "math": 78, "bangla": 85, "english": 90 },
        { "id": 2, "name": "Nusrat", "math": 65, "bangla": 75, "english": 80 },
        { "id": 3, "name": "Rahim", "math": 84, "bangla": 82, "english": 88 },
        { "id": 4, "name": "Sadia", "math": 96, "bangla": 91, "english": 94 },
        { "id": 5, "name": "Mahmud", "math": 75, "bangla": 78, "english": 85 },
        { "id": 6, "name": "Rina", "math": 68, "bangla": 74, "english": 79 },
        { "id": 7, "name": "Tanvir", "math": 85, "bangla": 88, "english": 92 },
        { "id": 8, "name": "Lima", "math": 58, "bangla": 64, "english": 70 },
        { "id": 9, "name": "Hasibul", "math": 94, "bangla": 90, "english": 95 },
        { "id": 10, "name": "Maya", "math": 86, "bangla": 89, "english": 87 }
      ]
    return (
        <div className='container  mx-auto'>
            <LineChart width={900} height={400} data={subjectMarks}>
                <Line type="monotone" dataKey="math" stroke="red" />
                <Line type="monotone" dataKey="bangla" stroke="blue" />
                <Line type="monotone" dataKey="english" stroke="yellow" />
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
                <CartesianGrid stroke="gray" strokeDasharray="5 5" />
            </LineChart>
        </div>
    );
};

export default Lchart;