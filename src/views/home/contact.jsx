import { useState } from "react";
import { Button } from "../shared/button.jsx";
import { Input } from "../shared/input.jsx";
import { Label } from "../shared/label.jsx";
import { Textarea } from "../shared/textarea.jsx";
import { contactLinks } from "../../models/pageData.js";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    message: "",
  });

  const reset = () => {
    setFormData({ name: "", number: "", email: "", message: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLoading) return;

    setIsLoading(true);
    setSubmitted(false);

    try {
      const response = await fetch("https://formsubmit.co/ajax/cbf265d503df57d55ab969757d8ba81b", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          number: formData.number,
          email: formData.email,
          message: formData.message,
        }),
      });
      const data = await response.json();
      if (data.success) {
        setSubmitted(true);
        reset();
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <section id="contact" className="no-print">
      <div className="container">
        <div className="pt-16 md:pt-32 pb-20">
          <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
            <h2>Contact Me</h2>
            <p className="text-xl text-primary">( 05 )</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-7 sm:gap-12">
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <Label htmlFor="name" className="label">
                      Name *
                    </Label>
                    <Input
                      required
                      className="w-full border-0 border-b border-border rounded-none focus-visible:ring-0 focus-visible:border-primary! focus-visible:outline-none py-2!"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <Label htmlFor="number" className="label">
                      Phone *
                    </Label>
                    <Input
                      required
                      className="w-full border-0 border-b border-border rounded-none focus-visible:ring-0 focus-visible:border-primary! focus-visible:outline-none py-2!"
                      id="number"
                      type="number"
                      name="number"
                      value={formData.number}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email" className="label">
                    Email *
                  </Label>
                  <Input
                    required
                    className="w-full border-0 border-b border-border rounded-none focus-visible:ring-0 focus-visible:border-primary! focus-visible:outline-none py-2!"
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="label">
                    Message *
                  </Label>
                  <Textarea
                    required
                    className="w-full border-0 border-b border-border rounded-none focus-visible:ring-0 focus-visible:border-primary! focus-visible:outline-none py-2!"
                    name="message"
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={2}
                  />
                </div>
                {submitted && (
                  <div className="flex items-center gap-2">
                    <img
                      src="/images/icon/success-icon.svg"
                      alt="success-icon"
                      width={30}
                      height={30}
                    />
                    <p className="text-muted-foreground">
                      Message sent successfully! I&apos;ll get back to you soon.
                    </p>
                  </div>
                )}
                <Button
                  variant="outline"
                  type="submit"
                  disabled={isLoading}
                  className="relative overflow-hidden cursor-pointer w-fit h-full py-2 sm:py-3 md:py-5 px-4 sm:px-5 md:px-7 border border-primary rounded-full group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="relative z-10 text-xl font-medium text-primary group-hover:text-white transition-colors duration-300">
                    {isLoading ? "Sending..." : "Send Now"}
                  </span>
                </Button>
              </div>
            </form>
            <div className="flex flex-col sm:flex-row md:flex-col justify-between gap-5 md:gap-20 items-center md:items-end">
              <div className="flex flex-wrap flex-row md:flex-col items-start md:items-end gap-4 md:gap-6">
                {contactLinks?.socialLinks?.map((value, index) => {
                  return (
                    <div key={index}>
                      <a
                        href={value?.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base sm:text-lg font-normal text-muted-foreground hover:text-primary"
                      >
                        {value?.title}
                      </a>
                    </div>
                  );
                })}
              </div>
              <div className="flex flex-wrap justify-center gap-5 lg:gap-11 items-end">
                {contactLinks?.contactInfo?.map((value, index) => {
                  return (
                    <div key={index}>
                      <a
                        href={value?.link}
                        className="text-base lg:text-lg text-black font-normal border-b border-black pb-3 hover:text-primary hover:border-primary"
                      >
                        {value?.label}
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
