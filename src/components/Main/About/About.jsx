import React from 'react';

export default function About (
  {about = '', title, mixAbout = false, mixBounds = -1, mixTitle = -1, mixLine = -1, ...aboutFields}
) {
  const defAbout = 'about';

  return (
    <section className={about && mixAbout !== -1 ?  (mixAbout ?
      `${defAbout} ${about}__${mixAbout}` : about) : defAbout}>
      <div className={about && mixBounds !== -1 ?  (mixBounds ?
        `${defAbout}__bounds ${about}__${mixBounds}` : `${about}__bounds`) : `${defAbout}__bounds`}>
        <h2 className={about && mixTitle !== -1 ? (mixTitle ?
          `${defAbout}__title ${about}__${mixTitle}` : `${about}__title`) : `${defAbout}__title`}>{title}
        </h2>
        <hr className={about && mixLine !== -1 ? (mixLine ?
          `${defAbout}__line ${about}__${mixLine}` : `${about}__line`) : `${defAbout}__line`}
        />
        {aboutFields.children}
      </div>
    </section>
  );
}
