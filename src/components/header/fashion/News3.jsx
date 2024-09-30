import React from "react";
import "./news3.css";

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

const News3 = () => {
  return (
    <div>
      <News
        title="New News"
        name="Now sport"
        image={
          "https://www.interfax.ru/ftproot/photos/photostory/2022/04/29/week/week7_1100.jpg"
        }
        textnews="Якщо ви не можете знайти нову функцію або хочете поділитися своєю думкою про функції Google Фото, надішліть нам відгук. На жаль, ми не можемо відповісти на кожен відгук. Якщо у вас серйозніша проблема або ви хочете повідомити про порушення, дізнайтеся, як поскаржитися
      на контент і заблокувати користувача Якщо ви не можете знайти нову функцію або хочете поділитися своєю думкою про функції Google Фото, надішліть нам відгук. На жаль, ми не можемо відповісти на кожен відгук. Якщо у вас серйозніша проблема або ви хочете повідомити про порушення, дізнайтеся, як поскаржитися
      на контент і заблокувати користувача"
      />
      <News
      title="Old News"
      name="Now weather"
      image={
        "https://img.freepik.com/premium-photo/wide-angle-shot-of-a-single-tree-growing-under-a-clouded-sky-during-a-sunset-surrounded-by-grass_1033124-10.jpg"
      }
      textnews="Якщо ви не можете знайти нову функцію або хочете поділитися своєю думкою про функції Google Фото, надішліть нам відгук. На жаль, ми не можемо відповісти на кожен відгук. Якщо у вас серйозніша проблема або ви хочете повідомити про порушення, дізнайтеся, як поскаржитися
    на контент і заблокувати користувача Якщо ви не можете знайти нову функцію або хочете поділитися своєю думкою про функції Google Фото, надішліть нам відгук. На жаль, ми не можемо відповісти на кожен відгук. Якщо у вас серйозніша проблема або ви хочете повідомити про порушення, дізнайтеся, як поскаржитися
    на контент і заблокувати користувача"
    />
    </div>
  );
};

export { News3 };
