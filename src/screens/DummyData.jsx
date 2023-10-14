import { useEffect, useState } from "react";

import { v4 as uuid } from "uuid";

const API = "https://dummyjson.com/users";

const headings = [
    { label: "S. No", key: "id" },
    { label: "Profile Pic", key: "image" },
    { label: "First Name", key: "firstName" },
    { label: "Last Name", key: "lastName" },
    { label: "Gender", key: "gender" },
    { label: "E-mail", key: "email" },
    { label: "Username", key: "username" },
    { label: "Domain", key: "domain" },
    { label: "IP", key: "ip" },
    { label: "University", key: "university" },
];

// eslint-disable-next-line react/prop-types
const UserTableRow = ({ user }) => {
    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            {headings.map(({ key }) => {
                if (key === "image")
                    return (
                        <img
                            src={user[key]}
                            alt={"Profile pic"}
                            className="w-10 h-10 rounded"
                        />
                    );

                return (
                    <td key={uuid()} className="px-6 py-4">
                        {user[key]}
                    </td>
                );
            })}
        </tr>
    );
};

const DummyData = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        (async () => {
            const res = await fetch(API);
            if (!res.ok) return;
            const json = await res.json();
            setUsers(json.users);
        })();
        // empty dependency array means it will only run once on mount
    }, []);

    return (
        <main className="my-8 space-y-8">
            <h1 className="text-3xl font-bold sm:text-4xl text-center">
                Dummy Data
            </h1>
            <div className="relative overflow-x-auto px-4">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            {headings.map(({ label }) => (
                                <th
                                    scope="col"
                                    className="px-6 py-3"
                                    key={label}
                                >
                                    {label}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <UserTableRow key={uuid()} user={user} />
                        ))}
                    </tbody>
                </table>
            </div>
        </main>
    );
};

export default DummyData;
