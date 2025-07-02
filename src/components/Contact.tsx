
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Linkedin, MapPin } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real application, you would send this data to a server
    console.log("Form submitted:", formData);
    toast.success("Message sent successfully! I'll get back to you soon.");
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5 text-blue" />,
      title: "Email",
      content: "dubeyaditya80045@gmail.com",
      link: "mailto:dubeyaditya80045@gmail.com"
    },
    {
      icon: <Phone className="h-5 w-5 text-blue" />,
      title: "Phone",
      content: "+91 8810921207",
      link: "tel:+918810921207"
    },
    {
      icon: <Linkedin className="h-5 w-5 text-blue" />,
      title: "LinkedIn",
      content: "aditya-dubey-04846727b",
      link: "https://linkedin.com/in/aditya-dubey-04846727b"
    },
    {
      icon: <MapPin className="h-5 w-5 text-blue" />,
      title: "Location",
      content: "Lanka, Varanasi, India",
      link: "https://www.google.com/maps/place/Lanka,+Varanasi"
    }
  ];

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <p className="text-gray-600 mb-8">
              Feel free to reach out to me for any questions or opportunities. I'm open to discussing 
              web development projects, job opportunities, or just connecting with fellow developers.
            </p>
            
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <a 
                  key={index} 
                  href={item.link} 
                  target={item.title === "Location" || item.title === "LinkedIn" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-lg bg-gray-50 hover:bg-blue-50 transition-colors"
                >
                  <div className="p-2 bg-blue-100 rounded-full">{item.icon}</div>
                  <div>
                    <h4 className="font-medium text-gray-800">{item.title}</h4>
                    <p className="text-gray-600">{item.content}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  placeholder="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="border-gray-300 focus:border-blue"
                />
              </div>
              
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="border-gray-300 focus:border-blue"
                />
              </div>
              
              <div>
                <Input
                  placeholder="Subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="border-gray-300 focus:border-blue"
                />
              </div>
              
              <div>
                <Textarea
                  placeholder="Your Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="min-h-32 border-gray-300 focus:border-blue"
                />
              </div>
              
              <Button type="submit" className="w-full bg-blue hover:bg-blue-dark">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
