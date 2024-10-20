import React from 'react';

const ServiceTitleSection = ({
    breadcrumbLinks,
    title,
    description,
    imageSrc,
    imageAlt,
    imageTitle,
    stats,
}) => {
    return (
        <section className="sub-heading light-bg service-title-section">
            <div className="container">
                <div className="row align-items-lg-center mb-4">
                    <div className="col-lg-6 pb-4 pb-lg-0">
                        <div className="content-block">
                            <div className="row">
                                <div className="col-12">
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb">
                                            {breadcrumbLinks.map((link, index) => (
                                                <li
                                                    key={index}
                                                    className={`breadcrumb-item ${!link.href ? 'active' : ''}`}
                                                    aria-current={!link.href ? 'page' : undefined}
                                                >
                                                    {link.href ? (
                                                        <a title={link.title} href={link.href}>
                                                            {link.title}
                                                        </a>
                                                    ) : (
                                                        link.title
                                                    )}
                                                </li>
                                            ))}
                                        </ol>
                                    </nav>
                                </div>
                                <div className="col-lg-12">
                                    <h1>{title}</h1>
                                </div>
                                <div className="col-lg-12">
                                    <div className="title-text">
                                        <p>{description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="image-block">
                            <img
                                src={imageSrc}
                                alt={imageAlt}
                                title={imageTitle}
                                width="610"
                                height="517"
                            />
                        </div>
                    </div>
                </div>
                <div className="service-experience-info" id="counter">
                    <div className="row">
                        {stats.map((stat, index) => (
                            <div key={index} className="col-sm-6 col-lg-3">
                                <div className="info-box">
                                    <strong className="count">
                                        <span className="counter-value" data-count={stat.count}>
                                            {stat.count}
                                        </span>
                                        +
                                    </strong>
                                    <span className="info-text">{stat.label}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceTitleSection;

