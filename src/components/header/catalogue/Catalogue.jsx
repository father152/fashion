import { Link } from "react-router-dom";
import "./catalogue.css";
import "./авто 2.jpg";
import "./авто 3.jpg";

function Card(props) {
  return (
    <div className="card">
      <div>
        <span className="brand">{props.brand}</span>
      </div>
      <div>
        <span className="name">{props.name}</span>
      </div>
      <img className="pic" src={props.image} alt={props.names} />
      <div>
        <span className="model">{props.model}</span>
      </div>
      <div>
        <span className="description">{props.description}</span>
      </div>
      <div>
        <span className="cost">{props.cost}$</span>
      </div>

      <button className="buy">
        <Link to="/buy">BUY</Link>
      </button>
    </div>
  );
}

const Catalogue = () => {
  return (
    <div className="catalogue">
      <h1>CATALOGUE</h1>
      <div className="product">
        <Card
          brand="WEST"
          name="Jacket"
          image={
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYVFRgWFhUZGRgaGhweHBkcGh0cHhocIRkaGRwcGhwhIS4lHB4rHxocJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QGhESHjEhISE0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAQMAwgMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAACAwABBAUGB//EAEAQAAEDAQUEBwcDAwMDBQAAAAEAAhEDBBIhMUFRYXGBBRORobHR8AYUIjJSweFCYvEHgpIVctIjM8IWQ2Oisv/EABoBAQEBAQEBAQAAAAAAAAAAAAABAgMEBgX/xAAjEQEBAAICAQMFAQAAAAAAAAAAAQIRAxIhEzFBBBRRYXEF/9oADAMBAAIRAxEAPwD5DKjT46KlGlaBPEHMHeJjvAKoAkgDNRonL12qRlsPPjggko4B8j5xCBEDpOvrHYimNiPXghc3PZynd4aKycEM+s9iKEhUUT88DPrep67igEhFO3uVgY490KoQUDioEUevWSkbkVQUuqQixE6aHt8wgEBSEUes1V1BWnqdfPwVQiCpAMa+vWSkSiueSmkaY9pA8goBu6xgoAru4T69fnYoFBUKJnV/uCiGikT40JI7O7TVCBv/ACoFthbRKigG9E3HPd5IJCPvy2zAkZ6DLsCo+gjafXrNNLFNA8dNM8Mce5WWnM6+KNrdOPrgmspA7t8jDTxU0sjK1knDvgdqGCfX2Wp9IwNcTkdkeaWxklDQS2ft2+tijhrK0BnAx/Gzx2IhSvZI1pjhEG89y0GluQvplDRN3l6lS6mhmU+grDDzQ0SQoWphG7l6xVFqGiw1VCdcxjw70IChouFLo9aflNu/ZVdQ0UWopwgEwYkZScdJMxJAO/SUdxQNUXRUKLRdbsd2jyUQ0xgIru3vn1pCkKLppx2oBGI9evUqQiAV0u0aMcfH7omqBqY1mnDDbOxNLAtansEZeiqa1GxuKabhrWXvNA+xGL2gg+tqbTZszPoc1pZJJbJxnA9mOyE03JtzGCNMEbHd/wDHmt1Wi0AZyMzoQlOsbpIaC6JOWm0+tVnR1pVIThOGG6MVTxphhOzd2o2tuxyz9bQVCydE0ugXR69ep3IXNTgzYquovVn6s7FTmrS6mquRxUTqzXNVLv5Wi4oWbPRUOpAbqFG05wAxT209vNQMUXqSG4Kri0imiFNZ2vVm6tu13+I/5K1p6obT2DzUTZ1cgtUCIBXC9Wng2q6rARNAwz39unJGAr1amSgE1rezxUazcmNYr1blUGI2tRtYtApQJOuQ+53euLq6Qum2MdU9rcZVNYnMYnV2xg2AEfFs07ZT6Py4jAnAzqNd2fihpUvwtLD6zWbi7Y4le4saJcXOkSA34YJnD+dyyUaDXCCMdDlOz1vXXs1mvOiQNBIMa7CvU9F9G02XqjwXNLBeEiM8TE5iM9yxl4dOkfPGWV0nzVuorr26xBjy0SQCYnUaaZoX2Mlt9rTd1PYPuFmp6TkOo/yhNHeuv1E6QfUpjLGNnrzWbW5w7cPqEJprt1bFuSfdSNO5Y7JeGxyeqRdUt/u6oUFLkz6bE2mjFFbDRTadmGM4YYYZnDswxWLkem5/VKLp9TuHrmrU7L0eQu6KXNi0Gmr6vcv2Jg+d7kNZh4pgCMU0Yp6rc41nJpTWpraaJjFqptgzAOORyO4xilwd8M9pTo3RecAfpbt/cf2+J3SoGkmTidqcQXGTmeX8CExjFno9OJLKaaGbAnsppzKKlxerCF06a206GOCunS3LdSo7Qs3F6MYqnSjELo0bUQMpGxDSp+vXJaGWdcso7TXyS5nWVGhzBEjADTUk9mibb+jWNcC1zbpMRkGktnHHwOELZZ6Oo2GfytzGi6JGDRgI1nPt8V58rot/DzVegxl24QRqTJzicvQTDRBEmHCcIEDTnsXdq0Xva5hDcCPiuZi7uz7FiZZS0YtABOYiePBcsq3hk5NpoYEBhkCZ8cdVgdZhE64L1ZoQ3AtgjEZY64arBTsocTHfniuFydJZXnuo3Tu24oDZt0L0bbJuQPse5YuaXGPPizJjLLuwXZ91Rss0aZ+pXO8idI43uyi7fu+5RT1DpHzfq1YpLb1KnUr62Yvg/VYurV9WtwplCaK6Y4xPVZW08VqpsTG2claadAq5SPRwZ3ZTKaeyktDKKcyiuOWn6fHkQymnMppzaSeykuWVj3YUtjFspDJUymnsYueVj0SmsC1sG9IY1aWBefKtbPpDRbLLvWNgWqkF5s6WumxocCCBiFndYXBuEOxxBAwnDNHQfGC6DbQMFwtc7llj7PPvsgMy3PBJZYGzhh9+a7lpeCD602LE0Ljk9GHJbGJtlGszvJKjqAWxrQjLAuNa7uUbOrFm3LpGmFYpLnWuzne7qLp9Sos6p3j52OiSmDofcV2n26mYxPLRMNvpnzgr9i/6HI+dn+ZxOMzoqMm4o2dG4/Ku0LTS+s8cVBaGGfj7is36/kdcfoOOezj/AOn/ALVbbFuXVvs+scyjIZGD29srN+v5HXH6TCOSLKRoiFmOwLomgRk+UXVx+sTwWL9dn+XbHhkc7qTuUjTCUPSPSTaQ+YOPZznQaTB4GCvNWv21rMkUXtZ+5jBP+TpPrku2HLyZzftGcs8cPE817Sz2Cq7Km6Nt0gdpwWpnQ9X6Wji9n2K+UWn2ttL/AJq9Q/3keCw1OnazhjUf/m7zXTz81j17+H2P3J4zcwf3t+yP3R4zfTB/3hfDX9I1Prd/k7zQ/wCoP+t3+R81LP2fcZPvVKxvOTmH+8JrbI/KWf5t818GZ0zVblUf/m7zRjp6uMqr/wDJZuEvyfcZPvXUVRkyeBa7wJSH24sMPa5vEEeK+L2b2rtLCCKrjx/C+s+wfTT7TQLnPN68QScYgNwg6G8exYy4d+1PuL8xt/1Vv1IXdIt+oKdN9DkNvsDAdwIY7/cP/advm6dS0nHyD6rwYOByg6HULzZY2XVejHllm49YOkW/UE0W4fUF4zrnj6QjbaT+p3Zkudxb9R7IW8bQjZbhtC8Y60EmA6RwVte4nAmBsBU6Hevbe/cFF42/U2qJ0/Z3v4Zalepq0DhGKSa1TZyyXKD37R2hUXPkfFjuAXq6PJ2dV1pfhiR3qdc8n5nDshcl1d2V6dxAVX3nE3o7AnQ7Oo6s/wDkygqVjliFhvk55cVqsnR9Z8OZRe8TODXOEb4EQnQ7NNWnUa284BjImX1WNJGnwucHdy5to6TuCTlk0SZceWTRqeAGcg3dCVLXVIq2inSF4uJeLpmTDRjBOO7Lkt9t9gnv+JtppuAaDoYbmIh2DcSuuPHjXO55R4u39JPeTJzz3+tmiwOevet/plaLgf1jCDkAA08ficMORRM/pfVOdVg4A4cSSAF105vnZcqLl9BP9NHz/wB1vEx3ROCC0f00qsZfL5G66J4BxEq6Tb58SpeXtqP9O67snNG4uBd/9ZA7Vyx7MQ5zH1msc3LC8CdRea6E607R5y8pK77/AGZcMqjD/c0f+SUfZut+ktdwePsSnWnaOLK+w/0kYfdnn/5P/H8L5v8A+mbR9H/68l7z2dtx6MoNqVqZc0gthhMySHEkFoAAuRif1JMbC2PqAt7GG697Gkj5XOaDHAnJeM9p6DKT79GlTeH3SZvZl1yAWyIvXBBB/wC4AMl5TpT2ftlvrPtLaYYypdLBUeGuDLjQPhbegcdq9L7F+z9qsVOveFJ3WNBawOc684aEloDRGyZnSFLj8ykri2the2+bOaLhg4C85jh9TS5rbjhGLYg4EahZqZOOI5QvXdBMs73vFWzUWPfLXXaYBx3mTO9fO+kbGaVWpSMkse5s6mDAME65rz58Wr5d8OXw7TqjjlprgEttqccCXAhefkj5i47ACQBhuKEWiDqN5krPpt+o9B17fq71F5/3x27sCtOh3GRrEckZrRoTySHMc3IkbRKJpdt5/hddOTVStpGQEjditNL/AKhJIhrRL3TgGyBPEkgAakhYKZJMBwPrNev6E6Ss1KzNabnWNqF7736ngvYwiRDg2HiJwOMYgqyTflLbp6n2Q6JaGtf1DKbdHvF6o7eAfl7l6q1dJUmiCA4D6sfFeJpdMVS5znMc4Ci57SCCyHfC118EjHGIkryfSHTz3E3ntbuJ8yF26y/xy7WPp1p9qaLP0t7AvJe0HtYKr2gNbDSDGMGJi9HzZ5HLmvCV+lGkEmqw7g4cNq5x6QH1t7QtaxnsedeXvavtc8S43DyOJ2ZrC/2wqkQerjZDv+WK8babYCYD2kDe3E6lVZ6t4zeaQN4z0+/Ym4Sbe0b7U1f0hk7YJA4AnE8cE6x9KMLr9Z76jt5w/jcF46+UDrQR/K1Lpi+X1aj7W0Q25cZdOBbdwPGc0J6csbs7NT5MaPBfKGWp7jdbMnQCSeAWkGoxoeWVAwkQ8sfdJLbzYdEEluI2jHJTweX1ey1LBUMGhTbvg/YrzvTlpsQeWMY1xByYC1rf9z3El7uAaF5CnaLQ9rrlOpdHzODHYA/uiBklOqdS0ufdnRt8FxOUXW3rv90ZFN4w1X1L2YqWYiGUmNduaJJ815ZnQvvtR9vthFGyzLA8hpe3BrBj8rDgJzJOGcrgWrph1nAezB5+Ub9p2gbOCw2720tNezmzVXB7LwOLGtMAl134QP1QeSzyWS6jWMt930O3f1HsVIRTv1SMPhbdaI3ujDhK81b/AOpVStDWMbQDTeDi97rxGTXXS34TMkfFlkV86vKiVztb1H0ij7Qmp8bqt9w+Jzw1rbojINaJDRBzk54rjW/pkWqq6rcuuMBwBm9Auhzp/UQBMYYLyAcRkV2LFayXkfpayGiJgAgeZ5lS+Ys8NRedh7VRe4flMxORjkkVKTtZPeo0PrXbB2q1j6s7H9iimjbvNr7G65HEck0vvD5GgjMxj2RirZZ2AyaTuTiO5MFiZncfyJUGSs0NgyduWHArr9M2Gy12030T1YcHFjHOa4uh5vhzZn5idMZXA6Tu0ixzWEEPn44cCGguIIGYkCdq7regRbx1tnfZ217l9zGG7fdLi4NaAfiacb0ibwGMStY+/wCky9jf6je1MNbY7O43S1r6zwLt8loIYBo0CMOAxxnwdGxA1GNMgOYHYZ/KSe8Lo28Cu4urVHNrNJa8uF6XAkYxiSIjkk1bDeukV2S1oaDi3AT5rcnjwkykstm3OtVEMe5oxAMAnNJujYt1osDmAuL2HGMHSSTt7CkMouJABbJIAx1OCaMr8+22eBsUIGxPfQc0lpAkEg46gwm0LC94Ja0YEDNNVIxgbMFpp1nNAcTIky0mcMuWMp3+k1vpHamv6MqkAQ0AAZuTVibjbScCGVGOcwtMse0lrmOBnAjIyvVUv6gNNO7Xoue8gteWlobUF6Q6JBYTi6G/K+HtLZc0+YstSnQZcexlR2ZJOAOzLHDeu3R6PtL2X6dlcxpaTebTcYG28Q1vitXV/qS2PLtZWcajaTX9XUcTDpcbt4lt5wEF0HE6rpWDoJ95rqkBrcQ0au0Jhb7ZYbTQYKlVlQMgmXObiIBJgEGPiGe1YbP020AQHuLZF0uIAnO84uMjAEYHdCSSeS3K+HM9pKn/AFboPyt8cfLsXNqPDhMQ4ZxqNvFHb6he9znHFxM7tfXBZ2uEgaTjzwKxbu7ak1C10bD0NWqiWsw2kxPBHbjQYA2lec4ZvOR3AZRrrxWN9uqOzqOOEfMctmeSilPplrrpEEGCN4MFP6PfDxvB8FlBW2zxfBzESIGsEeP2QdN1SJHDiqbV2eKQ95Ghjb/CDrgdFGmzrP2q1l69u/sHmog6b65ds5Ej7gKNtRGgPM8PqTr+haMN4nthIqifqnkB2rIy9I1r4aMcyIx/U0gZnbC5jbI9uJaYzDh56FdynRLjBBbgSHAh8ENJBLcokCdglItXTF57iBTLS4w4OuGJzIPbgO1bx1fFZy2x2OwvquIZoJc4n4QNp2LI+0QSBDgNRgDvG5dTpHpNrafU03D4zNR4xmcmg6gDDt2rjdSNHDm13kVdIZVtN5pbGoPZPmkUXQ4HYQezFGaYAJvA8JHiEsNO7tCmmrfEXVdLidpJ7StFmtVxpGOJnuWa6d3aPNG2kSJwz+po8TwQl92n3871DbHRICzdQf2/5t80dMFuBiP9zT91WSnPJxJnivQ1vba3uZ1ZtTwy6G3WhrQGgQAA1ogRsXC6ucZaOJhWA0ZubyDimjYrR0jVeIfVe4bHPcRGyCckV660N1zPEx9gO9C2owbT/aI5icUrGbzpic8iTuVDHOBIEa5jMiRM9/akuu4xO5E2oQ2Af1THJAc8OXiorQ2z6xh9TsBy2+sEFRzB+47sG+E9wVEOcZcSTtOPeUbbONVBlJWmzEDGfwmCzj0ExlBBbKh080ZxGIHL+FYZxRXN5U0uy43Ds/KiZc3qk0bdAv8A3DdiPWSG8cPiHcjNFpzDgqaxo0A4nl5rLRLrUQZEg7Qdsjbv71zbSWnZO3Fdm6I/TyCX1IOg7Cg89Gw9yq8V3n2RuwdhSnWJmvitbZ044qHap1pXVNiZvQ+6NV2OZ1hVX10zYhpKH3MJtHNvqiV0vcgp7mE2OdeUniul7m3Z3q/dGjRBzQeParx2fddIWYbEfUoOYxjvplMZT2rf1e5QMHqEGdtMfV3JgZv7k24oG8UCbiu76gppZuKgHrFAEImkohyUA3IK+JRV29o8lEHZYwxn4q8MiYjgP45pQqOMTHAR91Rp63o5T3hYbNL2HUcoKE0wcj3eKE03fV2iAhdeGreURux/CC30gMvApNRjsCG3tpww7SiNpJwI7vujNpGwlAhrCdg5KhTP1Ds/Kea5+mNmRSzacPl7/wAoALDt8FVwcexGXnZ3FCDtn1yWkAKE6Ecwp7vsc7uhOkfV9kJJ0g80Cbp26aj7o+qEZzylPDDqUREZ/dTZpn6vgi6nd3I5HqfNQmdvam00C6YyPYquHZ3FRx3mUtwM5lUEGbuxVG5RzyBEnvVkE6ZIKgKFp3qy0+tnao3nntlAJneqPBMvjaez8qNfOuaBeGwqJl79vr/FRA3r3DMN7T9jvRis2T8I4TH2CzMs8QSO52vNNFM/SBrlPiVlo59qaP0iDocQOwoPeWkYQDwwSH2U53uQA38FXVjUkhE20S7DKDv+yvqp/S3LZCXTcBkIKY6oTqTzCKQ6lBhoP9pARlms9ojzRXyMgRO/wQEuOfmgJrZwBcI2CfFVDhtjfGO9EHnZ63YYIjWMTdG/1CAGNOscZARhwHqSqc44QCTsGWPFJLzOLXDEZQfugMvbt4q8dIVlmwT3fZIdTEzEbrxwQEb4OY8VRn0IUptBnA8Z8lTv9hOau00U9pznLVQvfGDsN0H7I7+xjuCPrI2jlkmzRQdhBLuycUUnTvnzR3nHEExwAVucNXdo8k2aU1gObiOAJ+ys0W/UTyA/lLNoEYgzw9Yq+uGgM+tyot9HYe1AbMPq7imtvHQ96jWnblu1QK93H19yiu63aog1mQPm8khtWcZw1jTvTbjdo9aqnsaBI12IFkDRxPcqOEY9/wBlXUTkSEbbK3MnvKCnAHYeSkYflP6kDZ3yiIE4Ad6ypTW8eEqrkfyEVzEycdyNo4oM9R7zk6dMMksB4Gcf2/lbC1sYmOKrqxPzQN2aDMWvOIk8RCEtfqePorWWQcO2fypLt3NBjDHDEPPIAKw12mu2Ctbmu3dyEMdu5QgzgPA/CJjSdyt1N2108JTWkgQcY/aByMIERJhzpPrYiYw7400TTV2AeH2UdUwzPJATabRjj3eSMFoEmVldVGknijc8HRAT6zQc+KnXN0ISzvjmQgeW5ADegJ1bh5pb6vAcvyruxk0BQVHj9IngFoD1ztrfXNRV124dgURDWUBsR3I1QljpkzyyTRTGqAA+MlTq3DsVXGaPPDNTqmtOfPVAJrnaEL7UdAOKLqGnHNQUhocNiCha3YA+HijdXdnh2BCaLYm94q2NAQX1h1amCo7bHJZ6gjXmUnrD9QU0ba2vEzim3xv4ZrF1hwSnVDP3VNt76rdexCakYgntWE2hTrhnAQ22Cu/aPFLNUmQR2apDbQNRyRe9SMFNGzOsjNv3VOJ9BA1xP6gjuTuKoXccfxgguunLHeVpZSGpT202jnuQ0wtpvOQCJtN+i6AEbIRU5InDgs7XTGyg/wDUBHGEx1KNce1aHUwc5PNKLBOAKBUDZ3BRSTt8VE0m2ipks1VRRWCwwADBWSrUVF6JLnkEYqKIM9SoYOKKyvJGJlRREPqZLMRgoogjs0xRRAgrOooqC1Ce1gnJUooNTKYk4JhUUWWgNxTG4KKILoonPIGeqpRBV8xmmNeYzUUWhd5RRRZH/9k="
          }
          names="Picture 1"
          model="Style"
          description="dfgergeg ergdfgerg ergergerg ghjuighj 
        fghjrthdh thdghdh "
          cost="77"
        />
        <Card
          brand="Ford"
          name="Auto"
          image={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtbgj0V4Z3lw5DmTmh60MSVo3jIExi2rSl5g&usqp=CAU"
          }
          names="Picture 2"
          model="Focus"
          description="dfgergeg ergdfgerg ergergerg ghjuighj 
        fghjrthdh thdghdh "
          cost="45"
        />
        <Card
          brand="Ford"
          name="Auto"
          image={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2rh5cFRzQ9DPEHZYlKO-gznuz6BB7_6LmVw&usqp=CAU"
          }
          names="Picture 3"
          model="Focus"
          description="dfgergeg ergdfgerg ergergerg ghjuighj 
        fghjrthdh thdghdh "
          cost="45"
        />

        <Card
          brand="WEST"
          name="Jacket"
          image={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxuH8PntHVIli7ufhiPVnoeE6QC92Ge6Ek7Q&usqp=CAU"
          }
          names="Picture 4"
          model="Style"
          description="dfgergeg ergdfgerg ergergerg ghjuighj 
   fghjrthdh thdghdh "
          cost="45"
        />
        <Card
          brand="Ford"
          name="Auto"
          image={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2rh5cFRzQ9DPEHZYlKO-gznuz6BB7_6LmVw&usqp=CAU"
          }
          names="Picture 5"
          model="Focus"
          description="dfgergeg ergdfgerg ergergerg ghjuighj 
   fghjrthdh thdghdh "
          cost="45"
        />
        <Card
          brand="Ford"
          name="Auto"
          model="Focus"
          description="dfgergeg ergdfgerg ergergerg ghjuighj 
   fghjrthdh thdghdh "
          cost="45"
        />
        <Card
          brand="WEST"
          name="Jacket"
          model="Style"
          description="dfgergeg ergdfgerg ergergerg ghjuighj 
        fghjrthdh thdghdh "
          cost="45"
        />
        <Card
          brand="Ford"
          name="Auto"
          model="Focus"
          description="dfgergeg ergdfgerg ergergerg ghjuighj 
        fghjrthdh thdghdh "
          cost="45"
        />
        <Card
          brand="Ford"
          name="Auto"
          model="Focus"
          description="dfgergeg ergdfgerg ergergerg ghjuighj 
        fghjrthdh thdghdh "
          cost="45"
        />
      </div>

      <Link to="/" className="back">
        Home
      </Link>
    </div>
  );
};
export { Catalogue };
