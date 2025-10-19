"use client";
import './policy.css'
import { useState } from "react";
import { Accordion } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Policy = () => {
  const [activeKey, setActiveKey] = useState<string | null>(null);

  const handleSelect = (eventKey: string | null) => {
    setActiveKey(eventKey === activeKey ? null : eventKey);
  };

  return (
    <div className="container mx-auto p-4 bg-white text-black mt-10">
      <Accordion activeKey={activeKey} onSelect={(e) => handleSelect(e as string | null)} alwaysOpen>

        {/* 1. General Policy */}
        <Accordion.Item eventKey="0">
          <Accordion.Header>1. General Policy</Accordion.Header>
          <Accordion.Body className="visible show">
            <p><strong>1.1</strong> All customers purchasing from our store are entitled to consumer protection policies.</p>
            <p><strong>1.2</strong> We guarantee authentic products and quality assurance.</p>
          </Accordion.Body>
        </Accordion.Item>

        {/* 2. Products */}
        <Accordion.Item eventKey="1">
          <Accordion.Header>2. Products</Accordion.Header>
          <Accordion.Body className="visible show">
            <p><strong>2.1</strong> Product images on the website are for illustration purposes only.</p>
            <p><strong>2.2</strong> Packaging may differ from the displayed images.</p>
          </Accordion.Body>
        </Accordion.Item>

        {/* 3. Shipping */}
        <Accordion.Item eventKey="2">
          <Accordion.Header>3. Shipping</Accordion.Header>
          <Accordion.Body className="visible show">
            <p><strong>3.1</strong> We offer nationwide shipping.</p>
            <p><strong>3.2</strong> Delivery time ranges from 2 to 5 business days, depending on the location.</p>
            <p><strong>3.3</strong> Shipping fees are applied based on our current policies.</p>
          </Accordion.Body>
        </Accordion.Item>

        {/* 4. Payment */}
        <Accordion.Item eventKey="3">
          <Accordion.Header>4. Payment</Accordion.Header>
          <Accordion.Body className="visible show">
            <p><strong>4.1</strong> We accept credit card payments, bank transfers, and cash on delivery (COD).</p>
            <p><strong>4.2</strong> All transactions are secured according to international standards.</p>
          </Accordion.Body>
        </Accordion.Item>

        {/* 5. Warranty & Returns */}
        <Accordion.Item eventKey="4">
          <Accordion.Header>5. Warranty & Returns</Accordion.Header>
          <Accordion.Body className="visible show">
            <p><strong>5.1</strong> Products are covered under the manufacturers warranty.</p>
            <p><strong>5.2</strong> We offer returns within 7 days for manufacturer defects.</p>
          </Accordion.Body>
        </Accordion.Item>

        {/* 6. Privacy Policy */}
        <Accordion.Item eventKey="5">
          <Accordion.Header>6. Privacy Policy</Accordion.Header>
          <Accordion.Body className="visible show">
            <p><strong>6.1</strong> Customer personal information is strictly protected.</p>
            <p><strong>6.2</strong> We do not share customer data with third parties without consent.</p>
          </Accordion.Body>
        </Accordion.Item>

      </Accordion>
    </div>
  );
};

export default Policy;
