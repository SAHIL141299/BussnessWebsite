import React from 'react'

const BreadCrumb = () => {
  return (
    <section class="sub-heading light-bg">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a title="Home" href="https://www.expertappdevs.com">Home</a></li>
                            <li class="breadcrumb-item active" aria-current="page">Solutions</li>
                        </ol>
                    </nav>
                </div>
                <div class="col-lg-7">
                    <h1>Solutions</h1>
                    <div class="title-text">
                        <p>We offer much more than just IT. Yes, we provide varied solutions to meet your growing and
                            ever-changing business needs.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default BreadCrumb
