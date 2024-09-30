import React from "react";
import "./news1.css";

function News(props) {
  return (
    <div className="news">
      <div>
        <span className="title">{props.title}</span>
      </div>
      <div>
        <span className="name">{props.name}</span>
      </div>
      <img className="pic" src={props.image} alt={props.names} />
      <div>
        <span className="textnews">{props.textnews}</span>
      </div>
    </div>
  );
}

const News1 = () => {
  return (
    <div>
      <News
        title="New News"
        name="Now sport"
        image={
          "https://images.unsplash.com/photo-1648183185045-7a5592e66e9c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBob3RvfGVufDB8fDB8fHww"
        }
        textnews="Якщо ви не можете знайти нову функцію або хочете поділитися своєю думкою про функції Google Фото, надішліть нам відгук. На жаль, ми не можемо відповісти на кожен відгук. Якщо у вас серйозніша проблема або ви хочете повідомити про порушення, дізнайтеся, як поскаржитися
      на контент і заблокувати користувача Якщо ви не можете знайти нову функцію або хочете поділитися своєю думкою про функції Google Фото, надішліть нам відгук. На жаль, ми не можемо відповісти на кожен відгук. Якщо у вас серйозніша проблема або ви хочете повідомити про порушення, дізнайтеся, як поскаржитися
      на контент і заблокувати користувача"
      />
      <News
      title="Old News"
      name="Now weather"
      image={
        "https://images.unsplash.com/photo-1648183185045-7a5592e66e9c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBob3RvfGVufDB8fDB8fHww"
      }
      textnews="Якщо ви не можете знайти нову функцію або хочете поділитися своєю думкою про функції Google Фото, надішліть нам відгук. На жаль, ми не можемо відповісти на кожен відгук. Якщо у вас серйозніша проблема або ви хочете повідомити про порушення, дізнайтеся, як поскаржитися
    на контент і заблокувати користувача Якщо ви не можете знайти нову функцію або хочете поділитися своєю думкою про функції Google Фото, надішліть нам відгук. На жаль, ми не можемо відповісти на кожен відгук. Якщо у вас серйозніша проблема або ви хочете повідомити про порушення, дізнайтеся, як поскаржитися
    на контент і заблокувати користувача"
    />
    </div>
  );
};

export { News1 };
