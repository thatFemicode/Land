import React from "react";
import { sections } from "../../data";
import { useEffect, useState, createRef } from "react";
const Home = () => {
  const [activeSection, setActiveSection] = useState();
  const pageHeight = 100;
  const charactersToRender = sections;
  const refs = charactersToRender.reduce((refsObj, character) => {
    refsObj[character.name] = createRef();
    return refsObj;
  }, {});
  const handleCLick = (name) => {
    refs[name].current.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };
  const observerMargin = Math.floor(pageHeight / 2);
  const activeClass = activeSection === sections.id ? "active" : "";
  useEffect(() => {
    const observerConfig = {
      rootMargin: `-${
        pageHeight % 2 === 0 ? observerMargin - 1 : observerMargin
      }px 0px -${observerMargin}px 0px`,
    };
    const handleIntersection = function (entries) {
      entries.forEach((entry) => {
        if (entry.target.id !== activeSection && entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };
    const observer = new IntersectionObserver(
      handleIntersection,
      observerConfig
    );
    observer.observe(refs[sections.name].current);
    return () => observer.disconnect(); // Clenaup the observer if component unmount.
  }, [activeSection, refs, sections]);
  return (
    <div className="main">
      <div className="navigation-bar">
        <div
          onClick={handleCLick}
          className={`navigation ${activeClass}`}
        ></div>
        <div className="navigation"></div>
      </div>
      <div ref={refs[sections.name]} className="section-1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, quia
        sunt voluptates, minus natus ea neque esse ex placeat perferendis
        quibusdam inventore consequatur enim nostrum exercitationem numquam modi
        assumenda maiores cum facere quo necessitatibus? Tempora aliquid, illum
        obcaecati totam qui enim commodi reiciendis ipsam natus error, modi ea
        ullam ut beatae itaque, placeat molestias. Sunt ab natus accusamus
        nesciunt suscipit, reiciendis magni totam non repudiandae maxime,
        blanditiis rem, ipsum quo. Sint voluptates, veritatis perspiciatis quae
        error corrupti et ipsam qui quia eum? Aperiam dolorum excepturi ex
        accusamus, iure nihil impedit blanditiis ut repellendus facere placeat
        magnam veniam voluptatibus labore facilis, iste sunt totam assumenda
        nisi quos? Doloremque, dignissimos neque est ducimus assumenda optio
        magnam recusandae consequuntur dicta esse veniam aperiam repellat unde
        ipsam fugiat quaerat. Iusto assumenda porro libero necessitatibus,
        cumque doloremque cupiditate eum, sapiente voluptatum voluptatibus, sed
        magnam dicta illo expedita qui at! Aut exercitationem voluptates odit.
        Eos a labore nesciunt? Unde vero exercitationem facere, iure
        voluptatibus quasi et, at dolore maxime velit sed asperiores nesciunt?
        Impedit accusamus odit excepturi enim aspernatur? Odio est aliquam
        reprehenderit pariatur atque. Maxime impedit eaque tempore quam optio
        adipisci doloremque veniam fugiat vitae eos mollitia provident saepe ad
        facilis a blanditiis architecto minus, quaerat officia corrupti quo
        repellat delectus. Asperiores architecto libero omnis accusantium soluta
        perspiciatis quibusdam atque aut error eaque nemo neque, doloribus
        pariatur quod animi. Laborum sunt mollitia at harum nesciunt nemo.
        Quibusdam iusto alias reiciendis natus dolore? Dignissimos eveniet nulla
        minus quia beatae in reprehenderit voluptas sed, et maiores, suscipit
        ipsam autem doloremque temporibus animi architecto consequatur pariatur?
        Ea velit placeat ad debitis minus impedit consequuntur nemo totam vel
        earum, veritatis iusto quidem quisquam, repellat molestiae, porro soluta
        accusantium accusamus neque! Est ipsa facere itaque ea reprehenderit
        mollitia enim illo. Voluptatem, numquam quis eaque, et nihil quam a
        deserunt suscipit qui id doloremque molestiae voluptatum necessitatibus
        earum natus. Sunt, quae veniam nesciunt accusamus exercitationem, eaque
        neque, accusantium aliquam blanditiis iusto laboriosam nostrum sapiente
        enim atque corporis laborum perspiciatis optio a distinctio. Assumenda
        voluptatibus praesentium, placeat quo neque obcaecati doloremque! Atque
        vero vel fugit voluptatibus nisi consequatur tempore, necessitatibus
        saepe cupiditate. Eveniet maiores optio nulla nobis velit sapiente modi
        ab explicabo odio. Minima soluta, praesentium suscipit laboriosam at
        optio porro quo debitis rerum voluptates quidem accusamus ipsa iure
        mollitia consectetur? Sapiente ipsa ab, libero eius perferendis
        repudiandae necessitatibus odit est nemo dicta facilis adipisci hic
        facere cupiditate. Sapiente animi in quasi.
      </div>
      <div className="section-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam minima
        voluptatem similique? Placeat, amet non accusantium at culpa quisquam. A
        nihil unde fuga, asperiores cupiditate, atque sequi ipsam, expedita
        suscipit nulla ab maxime! Repellat recusandae aperiam corporis minus ab
        doloremque labore odit aliquid debitis inventore accusamus delectus
        deserunt sit assumenda sunt possimus architecto, ducimus autem
        blanditiis ut eaque? Dignissimos, labore explicabo. Ipsa velit
        distinctio corrupti, doloremque dicta perspiciatis eligendi aspernatur
        expedita non consequatur obcaecati, maxime nihil accusantium eveniet
        exercitationem rerum quasi ab! Blanditiis voluptatum corporis optio
        aliquid iure, impedit omnis pariatur facilis, deserunt error porro
        dolorum eaque nam perspiciatis. Odit eveniet aspernatur, iure nemo ex,
        atque reiciendis laborum perferendis soluta tenetur possimus aliquid
        quod sed sapiente quibusdam magnam! Maxime excepturi rem necessitatibus
        quis quod repellendus quisquam ullam repudiandae alias delectus error
        minus sed natus pariatur perferendis accusamus, distinctio quo tempora
        libero incidunt sapiente consequuntur unde. Repellat nemo optio impedit
        consequuntur, eveniet iusto nihil veritatis voluptas recusandae mollitia
        hic ut commodi, molestias, quisquam ducimus distinctio assumenda.
        Dolorum necessitatibus sit consequuntur ipsa debitis laudantium
        perspiciatis deserunt expedita recusandae dolorem sunt quod alias
        nostrum pariatur, aut perferendis velit dolore? Reprehenderit veniam
        temporibus eos praesentium? Aliquam ex fugit ipsum! Inventore maxime
        impedit vero adipisci, libero perferendis corrupti corporis nobis
        repudiandae molestiae minus dolores deleniti beatae est harum esse
        quaerat? Vero minima enim et reiciendis dignissimos. Suscipit
        repudiandae vitae optio! Quisquam reiciendis aliquam deleniti molestias,
        hic reprehenderit, non vel nesciunt laudantium rerum quasi quibusdam
        debitis aliquid totam error quaerat ea dicta impedit sed ab natus eum,
        saepe mollitia magni! Similique totam facilis accusantium dignissimos
        voluptatibus nisi, amet, ducimus, ullam sed nesciunt corporis quasi
        soluta. Doloribus laboriosam aliquid, totam minus ab rem accusamus cum.
        Mollitia autem soluta magnam. Magni aliquid consectetur aspernatur
        optio. Voluptatem consectetur dolore, delectus tempora ex facere dolores
        accusamus suscipit reiciendis sequi quidem!
      </div>
    </div>
  );
};

export default Home;
