function getImageUrl(person) {
    return `https://i.imgur.com/${person.imageId}s.jpg`;
}

function Avatar({ person, size }) {
    return (
        <img
            className="avatar"
            src={getImageUrl(person)}
            alt={person.name}
            width={size}
            height={size}
        />
    );
}

export default function Props() {
    return (
        <div>
            <Avatar
                size={100}
                person={{
                    name: 'Milton S. Hershey',
                    imageId: 'YfeOqp2'
                }}
            />
            <Avatar
                size={80}
                person={{
                    name: 'Hans Riegel',
                    imageId: 'OKS67lh'
                }}
            />
            <Avatar
                size={50}
                person={{
                    name: 'David Klein',
                    imageId: '1bX5QH6'
                }}
            />
        </div>
    );
}
